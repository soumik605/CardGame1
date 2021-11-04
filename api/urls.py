from django.contrib import admin
from django.urls import path
from django.urls.conf import include
from .views import main

urlpatterns = [
    path('home',main),
    path('',main),
]