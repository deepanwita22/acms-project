from rest_framework import serializers
from .models import General_detail,vital_elems,doctordetail

class General_detailSerializer(serializers.ModelSerializer):

    class Meta:
        model = General_detail
        #fiels=('vital,'observed') if want to return these only
        fields = '__all__'
        

class vital_elemsSerializer(serializers.ModelSerializer):

    class Meta:
        model = vital_elems
        #fiels=('vital,'observed') if want to return these only
        fields = '__all__'


class doctor_detailSerializer(serializers.ModelSerializer):

    class Meta:
        model = doctordetail
        #fiels=('vital,'observed') if want to return these only
        fields = '__all__'