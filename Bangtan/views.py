from django.http import HttpResponse
from django.template import loader

def menu(request):
    template = loader.get_template('menu.html')
    return HttpResponse(template.render())