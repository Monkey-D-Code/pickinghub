# Generated by Django 2.2.4 on 2019-10-28 15:27

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Website', '0002_brand_email'),
    ]

    operations = [
        migrations.AddField(
            model_name='brand',
            name='facebook',
            field=models.URLField(blank=True, null=True),
        ),
        migrations.AddField(
            model_name='brand',
            name='instagram',
            field=models.URLField(blank=True, null=True),
        ),
        migrations.AddField(
            model_name='brand',
            name='twitter',
            field=models.URLField(blank=True, null=True),
        ),
    ]
