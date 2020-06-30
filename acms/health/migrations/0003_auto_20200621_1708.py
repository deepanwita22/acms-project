# Generated by Django 3.0.7 on 2020-06-21 11:38

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('health', '0002_rbc'),
    ]

    operations = [
        migrations.CreateModel(
            name='General_detail',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=40)),
                ('email', models.CharField(max_length=40)),
                ('phone', models.CharField(max_length=10)),
            ],
        ),
        migrations.CreateModel(
            name='vital_elems',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('rbc', models.FloatField()),
                ('wbc', models.FloatField()),
                ('calcium', models.FloatField()),
                ('cust_id', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='health.General_detail')),
            ],
        ),
        migrations.DeleteModel(
            name='RBC',
        ),
        migrations.DeleteModel(
            name='Vitals',
        ),
    ]