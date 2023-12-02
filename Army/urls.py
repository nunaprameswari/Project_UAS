from django.urls import path
from . import views

urlpatterns = [
    path('Army', views.Army, name='Army'),
]