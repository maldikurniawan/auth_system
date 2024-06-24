"""
URL configuration for auth_system project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include
from users.acceslog import getcache
from users.logten import getlog
from users.limit import short
from users.paginate import paginates

urlpatterns = [
    path('admin/', admin.site.urls),
    path("api/v1/auth/", include('djoser.urls')),
    path("api/v1/auth/", include('djoser.urls.jwt')),
    path('cachereq/', getcache, name="Get"),
    path('cachelog/', getlog, name="Get"),
    path('cache/<int:batas>/<int:limit>', short, name="Get"),
    path('', include('users.urls')),
    path('api/cache/', paginates.as_view(), name="Get"),
]
