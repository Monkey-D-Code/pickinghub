# Generated by Django 2.2.4 on 2019-11-18 09:58

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('Accounts', '0003_master_contact_number'),
        ('Shop', '0009_product_trending'),
    ]

    operations = [
        migrations.CreateModel(
            name='Order',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('saved', models.BooleanField(default=True)),
                ('ordered', models.BooleanField(default=False)),
                ('confirmed', models.BooleanField(default=False)),
                ('dispatched', models.BooleanField(default=False)),
                ('delivered', models.BooleanField(default=False)),
                ('estimated_date', models.DateField(blank=True, null=True)),
                ('estimated_time', models.TimeField(blank=True, null=True)),
                ('date', models.DateField(auto_now_add=True)),
                ('time', models.TimeField(auto_now_add=True)),
                ('customer', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='Accounts.Customer')),
            ],
        ),
        migrations.CreateModel(
            name='SingleOrder',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('quantity', models.IntegerField()),
                ('date', models.DateField(auto_now_add=True)),
                ('time', models.TimeField(auto_now_add=True)),
                ('order', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='Shop.Order')),
                ('sublet', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='Shop.Sublet')),
            ],
        ),
    ]