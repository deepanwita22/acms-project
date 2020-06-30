"""acms URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.0/topics/http/urls/
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
from django.conf.urls import url
from rest_framework.urlpatterns import format_suffix_patterns
from health import views
from health.views import General_detailbyid
#from health.views import Checkreport
urlpatterns = [
    url(r'^admin/', admin.site.urls),
    #url(r'^vitals/', views.VitalsList.as_view()),
    #url(r'^rbc/', views.RBCList.as_view()),
    url(r'^vital/$',views.vital_elemsList.as_view()),
    url(r'^vital/(?P<pk>[0-9]+)/$',views.vital_elemsbyidList.as_view()),
    url(r'^vitalpost/$',views.vital_elemList.as_view()),
    url(r'^general/$',views.General_detailList.as_view()),
    url(r'^Checkreport/(?P<pk>[0-9]+)/$',views.Checkreport.as_view()),
    url(r'^signup/$',views.signup.as_view()),
    #url(r'^vital/glucose$',views.vital_glucose.as_view()),
    url(r'^vital/(?P<pk>[0-9]+)/(?P<value>\w{0,50})/$',views.vital_parameter1.as_view()),
    url(r'^vital/(?P<value>\w{0,50})/$',views.vital_parameter.as_view()),
    url(r'^doctordetail/$',views.doctor_details.as_view())

    
    #url(r'^general/(?P<name>\w{0,50})/$',General_detailbyid,name='General_detailbyid'),
    #url(r'^vitalpost/(?P<name>\w{0,50})/$',views.vital_elemList.as_view()),
]

urlpatterns = format_suffix_patterns(urlpatterns)