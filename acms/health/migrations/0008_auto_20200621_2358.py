# Generated by Django 3.0.7 on 2020-06-21 18:28

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('health', '0007_vital_elems_cust_id'),
    ]

    operations = [
        migrations.AddField(
            model_name='general_detail',
            name='password',
            field=models.CharField(default=0, max_length=10),
            preserve_default=False,
        ),
        migrations.AlterField(
            model_name='general_detail',
            name='email',
            field=models.EmailField(max_length=40),
        ),
    ]
