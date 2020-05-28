from django import forms
from django.contrib.auth.models import User
from welcomeapp.models import UserInfo
from django.core import validators



class login_form(forms.Form):
    Username = forms.CharField(max_length=128)
    Password = forms.CharField(widget=forms.PasswordInput)



class register_form(forms.ModelForm):

    password = forms.CharField(widget=forms.PasswordInput())
    repeat_password = forms.CharField(widget=forms.PasswordInput())


    class Meta:
        model = User
        fields = ('username','first_name','password',)

class user_infos(forms.ModelForm):

    class Meta:
        model = UserInfo
        fields = '__all__'
