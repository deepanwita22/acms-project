# Generated by Django 3.0.7 on 2020-06-21 13:28

from django.db import migrations, models
import multiselectfield.db.fields


class Migration(migrations.Migration):

    dependencies = [
        ('health', '0004_vital_elems_phosphorous'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='vital_elems',
            name='wbc',
        ),
        migrations.AddField(
            model_name='general_detail',
            name='age',
            field=models.CharField(default=0, max_length=3),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='general_detail',
            name='family_hist',
            field=multiselectfield.db.fields.MultiSelectField(choices=[('Diabetes', 'Diabetes'), ('Cancer', 'Cancer'), ('Thyroid', 'Thyroid'), ('Blood Pressure', 'Blood Pressure'), ('None', 'None')], default=None, max_length=43),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='general_detail',
            name='gender',
            field=models.CharField(default=None, max_length=2),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='vital_elems',
            name='ACR',
            field=models.FloatField(default=0),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='vital_elems',
            name='AG_ratio',
            field=models.FloatField(default=0),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='vital_elems',
            name='Albumin',
            field=models.FloatField(default=0),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='vital_elems',
            name='Alkaline_Phosphatase',
            field=models.FloatField(default=0),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='vital_elems',
            name='BP_dia',
            field=models.FloatField(default=0),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='vital_elems',
            name='BP_sys',
            field=models.FloatField(default=0),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='vital_elems',
            name='BUN',
            field=models.FloatField(default=0),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='vital_elems',
            name='Bilirubin_direct',
            field=models.FloatField(default=0),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='vital_elems',
            name='Bilirubin_indirect',
            field=models.FloatField(default=0),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='vital_elems',
            name='Bilirubin_total',
            field=models.FloatField(default=0),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='vital_elems',
            name='Globulin',
            field=models.FloatField(default=0),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='vital_elems',
            name='HDL',
            field=models.FloatField(default=0),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='vital_elems',
            name='LDL',
            field=models.FloatField(default=0),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='vital_elems',
            name='Non_HDL',
            field=models.FloatField(default=0),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='vital_elems',
            name='T3',
            field=models.FloatField(default=0),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='vital_elems',
            name='T4',
            field=models.FloatField(default=0),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='vital_elems',
            name='TSH',
            field=models.FloatField(default=0),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='vital_elems',
            name='Total_protein',
            field=models.FloatField(default=0),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='vital_elems',
            name='Triglycerides',
            field=models.FloatField(default=0),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='vital_elems',
            name='Uric_acid',
            field=models.FloatField(default=0),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='vital_elems',
            name='Vitamin_d',
            field=models.FloatField(default=0),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='vital_elems',
            name='creatinine',
            field=models.FloatField(default=0),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='vital_elems',
            name='glucose',
            field=models.FloatField(default=0),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='vital_elems',
            name='ketone',
            field=models.FloatField(default=0),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='vital_elems',
            name='total_cholestrol',
            field=models.FloatField(default=0),
            preserve_default=False,
        ),
    ]
