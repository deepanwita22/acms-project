# Generated by Django 3.0.7 on 2020-06-24 13:47

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('health', '0008_auto_20200621_2358'),
    ]

    operations = [
        migrations.CreateModel(
            name='doctordetail',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=40)),
                ('email', models.EmailField(max_length=40)),
                ('phone', models.CharField(max_length=10)),
                ('gender', models.CharField(max_length=2)),
                ('specialization', models.CharField(max_length=30)),
            ],
        ),
    ]
