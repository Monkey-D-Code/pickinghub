# Generated by Django 2.2.4 on 2019-08-21 13:58

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Shop', '0006_product_category'),
    ]

    operations = [
        migrations.AlterField(
            model_name='information',
            name='image_url',
            field=models.URLField(blank=True, max_length=400, null=True),
        ),
    ]
