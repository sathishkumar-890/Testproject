# Generated by Django 3.0.5 on 2020-04-27 02:10

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('welcomeapp', '0004_userinfo_password'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='userinfo',
            name='password',
        ),
    ]