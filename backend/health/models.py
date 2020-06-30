from django.db import models
from multiselectfield import MultiSelectField
# Create your models here.
#class Vitals(models.Model):
#    vital=models.CharField(max_length=10)
#    Observed_Value=models.FloatField()
#    Reference_Range_Lower_Range=models.FloatField()
#    Reference_Range_Upper_Range=models.FloatField()    

#    def __str__(self):
#        return self.vital

#class RBC(models.Model):
#    month=models.CharField(max_length=10)
#    Observed_Value=models.FloatField()
#    Reference_Range_Lower_Range=models.FloatField()  
#    Reference_Range_Upper_Range=models.FloatField()        
    
#    def __str__(self):
#        return self.month


class General_detail(models.Model):
    fam_choices=(
    ('Diabetes','Diabetes'),
    ('Cancer','Cancer'),
    ('Thyroid','Thyroid'),
    ('Blood Pressure','Blood Pressure'),
    ('None','None'),
    )
    name = models.CharField(max_length=40)
    email = models.EmailField(max_length=40)
    phone = models.CharField(max_length=10)
    age = models.CharField(max_length=3)
    gender = models.CharField(max_length=2)
    password = models.CharField(max_length=10)
    family_hist= MultiSelectField(choices=fam_choices)

######cust_id maps to primarykey id

class vital_elems(models.Model):
    cust_id = models.ForeignKey(General_detail,on_delete=models.CASCADE)
    glucose = models.FloatField()
    BP_dia = models.FloatField()
    BP_sys = models.FloatField()
    rbc =  models.FloatField()
    total_cholestrol = models.FloatField()
    Triglycerides = models.FloatField()
    HDL = models.FloatField()
    LDL = models.FloatField()
    Non_HDL = models.FloatField()
    ketone = models.FloatField()
    ACR = models.FloatField()
    T3 = models.FloatField()
    T4 = models.FloatField()
    TSH = models.FloatField()
    Bilirubin_total = models.FloatField()
    Bilirubin_direct = models.FloatField()
    Bilirubin_indirect = models.FloatField()
    Alkaline_Phosphatase = models.FloatField()
    Total_protein = models.FloatField()
    Albumin = models.FloatField()
    Globulin = models.FloatField()
    AG_ratio = models.FloatField()
    BUN = models.FloatField()
    creatinine = models.FloatField()
    Uric_acid = models.FloatField()
    Vitamin_d = models.FloatField()
    calcium = models.FloatField()
    phosphorous = models.FloatField()


class doctordetail(models.Model):
    name = models.CharField(max_length=40)
    email = models.EmailField(max_length=40)
    phone = models.CharField(max_length=10)
    gender = models.CharField(max_length=2)
    specialization = models.CharField(max_length=30)
