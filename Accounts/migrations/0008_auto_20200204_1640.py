# Generated by Django 2.2.4 on 2020-02-04 11:10

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Accounts', '0007_auto_20200204_1640'),
    ]

    operations = [
        migrations.AlterField(
            model_name='address',
            name='active',
            field=models.BooleanField(default=False),
        ),
        migrations.AlterField(
            model_name='contact',
            name='active',
            field=models.BooleanField(default=False),
        ),
    ]
