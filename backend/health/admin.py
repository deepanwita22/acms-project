from django.contrib import admin

# Register your models here.
#from .models import Vitals
#from .models import RBC
from .models import General_detail
from .models import vital_elems
from .models import doctordetail

#admin.site.register(Vitals)
#admin.site.register(RBC)
admin.site.register(General_detail)
admin.site.register(vital_elems)
admin.site.register(doctordetail)