from django.shortcuts import render
from welcomeapp.forms import register_form, login_form, user_infos
import datetime
import time

from django.contrib.auth import authenticate,login,logout
from django.urls import reverse
from django.http import HttpResponseRedirect,HttpResponse
from django.contrib.auth.decorators import login_required



# Create your views here.

@login_required()
def feedback(request):
    return render(request,'welcomeapp/feedback.html')

@login_required()
def content_page(request):
    return render(request,'welcomeapp/main.html')


@login_required()
def user_logout(request):
    logout(request)
    return HttpResponseRedirect(reverse('login'))

def signup(request):
    registered = False

    if request.method == 'POST':
        userform = register_form(data=request.POST)
        userinfo = user_infos(data=request.POST)

        if userform.is_valid() and userinfo.is_valid():

            pw = userform.cleaned_data['password']
            rpw = userform.cleaned_data['repeat_password']

            if pw == rpw:
                user = userform.save()
                user.set_password(user.password)
                user.save()

                userinfo.save()

                registered = True

            else:
                return HttpResponse("password Must be same")


            return HttpResponseRedirect(reverse('login'))

        else:
            print(userform.errors,userinfo.errors)

    else:
        userform = register_form()
        userinfo = user_infos()

    return render(request,'welcomeapp/signup.html',{'userform':userform,'userinfo':userinfo,'registered':registered})


def user_login(request):
    form = login_form()


    if request.method == 'POST':

        username = request.POST.get('Username')
        password = request.POST.get('Password')

        user = authenticate(username=username,password=password)

        if user:
            if user.is_active:
                login(request,user)
                return HttpResponseRedirect('streams/content_page')
            else:
                return HttpResponse("Account is not active")
        else:
            return HttpResponse("Invalid login details")

    else:
        user_forms = login_form()


    return render(request, 'welcomeapp/home.html', {'form': form})