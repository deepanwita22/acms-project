from django.shortcuts import get_object_or_404
from rest_framework.views import APIView
from rest_framework.generics import CreateAPIView
from rest_framework.response import Response
from rest_framework import status
#from .models import Vitals,RBC
from .models import General_detail,vital_elems,doctordetail
from django.http import HttpResponse
from django.core.exceptions import MultipleObjectsReturned
#from .serializers import VitalsSerializer,RBCSerializer
from .serializers import General_detailSerializer,vital_elemsSerializer,doctor_detailSerializer
from .compare import diabetes_Compare,Thyroid_Compare,liver_Compare,Bones_Compare,Kidney_Compare,cardio_Compare
import json
from django.http import JsonResponse


# Create your views here.
#signup detail show
class signup(CreateAPIView):

    def post(self,request):
        
        serializer=General_detailSerializer(data=request.data)
        if serializer.is_valid():
            print(serializer)
            serializer.save()
            return Response(status=status.HTTP_201_CREATED)     

        return Response(serializer.errors,status=status.HTTP_400_BAD_REQUEST) 


class General_detailList(APIView):

    def get(self,request):
        gen_det = General_detail.objects.all()
        serializer = General_detailSerializer(gen_det,many=True)
        return Response(serializer.data)
    
    def post(self):
        pass  

#general/username
def General_detailbyid(request, name):
    user = General_detail.objects.get(name=name)
    print(user)
    mydet = vital_elems.objects.get(cust_id=user.id)
    print(mydet)
    html = "<html><body>Welcome %d.</body></html>" %mydet.cust_id
    return HttpResponse(html)

#vital/
class vital_elemsList(APIView):

    def get(self,request):
        vital_elem =  vital_elems.objects.all()
        serializer = vital_elemsSerializer(vital_elem,many=True)
        return Response(serializer.data)

dict={}
#vital/id
#when person wants to see report
class vital_elemsbyidList(APIView):

    def get(self,request,pk):
        vital_elem =  vital_elems.objects.filter(cust_id=pk)
        serializer = vital_elemsSerializer(vital_elem,many=True)
        #print(serializer.data[0])

        glucose=serializer.data[0].get('glucose')
        total_cholestrol=serializer.data[0].get('total_cholestrol')
        HDL=serializer.data[0].get('HDL')
        LDL=serializer.data[0].get('LDL')
        ketone=serializer.data[0].get('ketone')
        Non_HDL=serializer.data[0].get('Non_HDL')
        diabetes=diabetes_Compare(glucose,HDL,total_cholestrol,LDL,ketone,Non_HDL)
        
        dict["diabetes"]=diabetes
        print(dict)
        
        T3=serializer.data[0].get('T3')
        T4=serializer.data[0].get('T4')
        TSH=serializer.data[0].get('TSH')
        thyroid=Thyroid_Compare(T3,T4,TSH)
        
        dict["thyroid"]=thyroid
         
        Bilirubin=serializer.data[0].get('Bilirubin')
        Bilirubin_direct=serializer.data[0].get('Bilirubin_direct')
        Bilirubin_indirect=serializer.data[0].get('Bilirubin_indirect')
        Alkaline_Phosphatase=serializer.data[0].get('Alkaline_Phosphatase')
        Total_protein=serializer.data[0].get('Total_protein')
        AG_ratio=serializer.data[0].get('AG_ratio')
        liver=liver_Compare(Bilirubin,Bilirubin_direct,Bilirubin_indirect,Alkaline_Phosphatase,Total_protein,AG_ratio)

        dict["liver"]=liver

        BUN=serializer.data[0].get('BUN')
        creatinine=serializer.data[0].get('creatinine')
        Uric_acid=serializer.data[0].get('Uric_acid')
        kidney=Kidney_Compare(BUN,creatinine,Uric_acid)

        dict["kidney"]=kidney

        Vitamin_d=serializer.data[0].get('Vitamin_d')
        calcium=serializer.data[0].get('calcium')
        phosphorous=serializer.data[0].get('phosphorous')
        bones=Bones_Compare(Vitamin_d,calcium,phosphorous)

        dict["Bones"]=bones

        BP_dia=serializer.data[0].get('BP_dia')
        BP_sys=serializer.data[0].get('BP_sys')
        total_cholestrol=serializer.data[0].get('total_cholestrol')
        Triglycerides=serializer.data[0].get('Triglycerides')
        cardio=cardio_Compare(BP_dia,BP_sys,total_cholestrol,Triglycerides)

        dict["cardio"]=cardio

        return Response(serializer.data)        


#vitalpost/
#form data
class vital_elemList(CreateAPIView):
    def post(self,request):
        
        serializer=vital_elemsSerializer(data=request.data)
        if serializer.is_valid():
            print(serializer)
            serializer.save()
            return Response(status=status.HTTP_201_CREATED)     

        return Response(serializer.errors,status=status.HTTP_400_BAD_REQUEST)      

#vital/rbc
class vital_parameter(APIView):

    def get(self,request,value):
        vitals={}
        vital_elem = vital_elems.objects.all()
        serializer = vital_elemsSerializer(vital_elem,many=True)
        leng=len(serializer.data)
        serializer_data = serializer.data.reverse()
        for i in range(5):
            
            #glucose[i]=serializer.data[i].get('glucose')
            if(i>=leng):
                vitals[i]=0
            else:
                vitals[i]=serializer.data[i].get(value)
        
        return Response(vitals)


class vital_parameter1(APIView):

    def get(self,request,pk,value):
        vitals={}
        vital_elem = vital_elems.objects.filter(cust_id=pk)
        serializer = vital_elemsSerializer(vital_elem,many=True)
        leng=len(serializer.data)
        serializer_data = serializer.data.reverse()
        for i in range(5):
            
            #glucose[i]=serializer.data[i].get('glucose')
            if(i>=leng):
                vitals[i]=0
            else:
                vitals[i]=serializer.data[i].get(value)
        
        return Response(vitals)
#checkreport/
class Checkreport(APIView):

    def get(self,request,pk):
        vital_elem =  vital_elems.objects.filter(cust_id=pk)
        serializer = vital_elemsSerializer(vital_elem,many=True)
        #print(serializer.data[0])
        
        glucose=serializer.data[0].get('glucose')
        total_cholestrol=serializer.data[0].get('total_cholestrol')
        HDL=serializer.data[0].get('HDL')
        LDL=serializer.data[0].get('LDL')
        ketone=serializer.data[0].get('ketone')
        Non_HDL=serializer.data[0].get('Non_HDL')
        diabetes=diabetes_Compare(glucose,HDL,total_cholestrol,LDL,ketone,Non_HDL)
        
        dict["diabetes"]=diabetes
        #print(dict)
        
        T3=serializer.data[0].get('T3')
        T4=serializer.data[0].get('T4')
        TSH=serializer.data[0].get('TSH')
        thyroid=Thyroid_Compare(T3,T4,TSH)
        
        dict["thyroid"]=thyroid
         
        Bilirubin=serializer.data[0].get('Bilirubin')
        Bilirubin_direct=serializer.data[0].get('Bilirubin_direct')
        Bilirubin_indirect=serializer.data[0].get('Bilirubin_indirect')
        Alkaline_Phosphatase=serializer.data[0].get('Alkaline_Phosphatase')
        Total_protein=serializer.data[0].get('Total_protein')
        AG_ratio=serializer.data[0].get('AG_ratio')
        liver=liver_Compare(Bilirubin,Bilirubin_direct,Bilirubin_indirect,Alkaline_Phosphatase,Total_protein,AG_ratio)

        dict["liver"]=liver

        BUN=serializer.data[0].get('BUN')
        creatinine=serializer.data[0].get('creatinine')
        Uric_acid=serializer.data[0].get('Uric_acid')
        kidney=Kidney_Compare(BUN,creatinine,Uric_acid)

        dict["kidney"]=kidney

        Vitamin_d=serializer.data[0].get('Vitamin_d')
        calcium=serializer.data[0].get('calcium')
        phosphorous=serializer.data[0].get('phosphorous')
        bones=Bones_Compare(Vitamin_d,calcium,phosphorous)

        dict["Bones"]=bones

        BP_dia=serializer.data[0].get('BP_dia')
        BP_sys=serializer.data[0].get('BP_sys')
        total_cholestrol=serializer.data[0].get('total_cholestrol')
        Triglycerides=serializer.data[0].get('Triglycerides')
        cardio=cardio_Compare(BP_dia,BP_sys,total_cholestrol,Triglycerides)

        dict["cardio"]=cardio
        #serializer=vital_elemsSerializer(data=request.data[0])
        return Response(dict)

#doctor details
class doctor_details(APIView):

    def get(self,request):
        doctor = doctordetail.objects.all()
        serializer = doctor_detailSerializer(doctor,many=True)
        return Response(serializer.data)
