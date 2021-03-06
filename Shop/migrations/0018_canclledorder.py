# Generated by Django 3.0.4 on 2020-03-14 06:45

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('Shop', '0017_auto_20200218_1444'),
    ]

    operations = [
        migrations.CreateModel(
            name='CanclledOrder',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('cancel_confirmed', models.BooleanField(default=False)),
                ('reason_for_cancel', models.TextField()),
                ('message_from_pickinghub', models.TextField(blank=True, null=True)),
                ('date', models.DateField(auto_now_add=True)),
                ('time', models.TimeField(auto_now_add=True)),
                ('order', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='Shop.Order')),
            ],
        ),
    ]
