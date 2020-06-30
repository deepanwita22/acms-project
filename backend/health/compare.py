thyroid={}
cardio={}
liver={}
kidney={}
bones={}

def diabetes_Compare(glucose,HDL,total_cholestrol,LDL,ketone,Non_HDL):
    count=0
    count_gluc=False
    d={}
    d['diabetes']={}
    d['diabetes']['glucose']=glucose
    d['diabetes']['HDL']=HDL
    d['diabetes']['total_cholestrol']=total_cholestrol
    d['diabetes']['LDL']=LDL
    d['diabetes']['ketone']=ketone
    d['diabetes']['Non_HDL']=Non_HDL
    if(d['diabetes']['glucose']>126):
        count_gluc=True
    if(d['diabetes']['HDL']>60):
        count+=1
    if(d['diabetes']['total_cholestrol']>240):
        count+=1
    if(d['diabetes']['LDL']>160):
        count+=1
    if(d['diabetes']['ketone']>12):
        count+=1  
    if(d['diabetes']['Non_HDL']>160):
        count+=1    
    
    if(count>=3):
        return('checkup')
    elif(count_gluc and count<3):
        return('avoid sweets for good health')  
    else:
        return('you are healthy')      
    


def Thyroid_Compare(T3,T4,TSH):
    count=0
    #count_gluc=False
    d={}
    d['Thyroid']={}
    d['Thyroid']['T3']=T3
    d['Thyroid']['T4']=T4
    d['Thyroid']['TSH']=TSH

    if(d['Thyroid']['T3']>199):
        count+=1
    if(d['Thyroid']['T4']>11.5):
        count+=1
    if(d['Thyroid']['TSH']>5.9):
        count+=1
       
    if(count==3):
        return('checkup')
    elif(count==2):
        return('avoid sweets')  
    else:
        return('you are healthy')      
    

def liver_Compare(Bilirubin,Bilirubin_direct,Bilirubin_indirect,Alkaline_Phosphatase,Total_protein,AG_ratio):
    count=0
    #count_gluc=False
    d={}
    d['liver']={}
    d['liver']['Bilirubin']=Bilirubin
    d['liver']['Bilirubin_direct']=Bilirubin_direct
    d['liver']['Bilirubin_indirect']=Bilirubin_indirect
    d['liver']['Alkaline_Phosphatase']=Alkaline_Phosphatase
    d['liver']['Total_protein']=Total_protein
    d['liver']['AG_ratio']=AG_ratio


    #if(d['liver']['Bilirubin']>0.5):
      #  count+=1
    if(d['liver']['Bilirubin_direct']>0.2):
        count+=1
    if(d['liver']['Bilirubin_indirect']>0.8):
        count+=1
    if(d['liver']['Total_protein']>8.2):
        count+=1
    if(d['liver']['Alkaline_Phosphatase']>190):
        count+=1
    if(d['liver']['AG_ratio']>2.0):
        count+=1

    if(count>=3):
        return('checkup')
    elif(count>=2):
        return('follow our guidelines')  
    else:
        return('you are healthy')      
    


def Kidney_Compare(BUN,creatinine,Uric_acid):
    count=0
    #count_gluc=False
    d={}
    d['kidney']={}
    d['kidney']['BUN']=BUN
    d['kidney']['creatinine']=creatinine
    d['kidney']['Uric_acid']=Uric_acid

    if(d['kidney']['BUN']>18):
        count+=1
    if(d['kidney']['creatinine']>0.7):
        count+=1
    if(d['kidney']['Uric_acid']>7.2):
        count+=1

    if(count==3):
        return('checkup')
    elif(count>=2):
        return('follow our guidelines')  
    else:
        return('you are healthy')      
    

def Bones_Compare(Vitamin_d,calcium,phosphorous):
    count=0
    #count_gluc=False
    d={}
    d['Bones']={}
    d['Bones']['Vitamin_d']=Vitamin_d
    d['Bones']['calcium']=calcium
    d['Bones']['phosphorous']=phosphorous

    if(d['Bones']['Vitamin_d']<20):
        count+=1
    if(d['Bones']['calcium']>8.5):
        count+=1
    if(d['Bones']['phosphorous']>2.5):
        count+=1

    if(count==3):
        return('checkup')
    elif(count>=2):
        return('follow our guidelines')  
    else:
        return('you are healthy')      
         

def cardio_Compare(BP_dia,BP_sys,total_cholestrol,Triglycerides):
    count=0
    #count_gluc=False
    d={}
    d['cardio']={}
    d['cardio']['BP_dia']=BP_dia
    d['cardio']['BP_sys']=BP_sys
    d['cardio']['total_cholestrol']=total_cholestrol
    d['cardio']['Triglycerides']=Triglycerides

    if(d['cardio']['BP_dia']>100):
        count+=1
    if(d['cardio']['BP_sys']>140):
        count+=1
    if(d['cardio']['total_cholestrol']>240):
        count+=1
    if(d['cardio']['Triglycerides']>50.5):
        count+=1

    if(count>=3):
        return('checkup')
    elif(count>=2):
        return('follow our guidelines')  
    else:
        return('you are healthy')              