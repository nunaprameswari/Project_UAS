from django.shortcuts import render
from django.http import HttpResponse
from django.template import loader
# Create your views here.

def Army(request):
    template = loader.get_template('menu.html')
    return HttpResponse(template.render())