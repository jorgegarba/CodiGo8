# Generated by Django 3.0 on 2020-01-08 16:07

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Pedidos', '0002_auto_20191218_1014'),
    ]

    operations = [
        migrations.AlterField(
            model_name='producto',
            name='prod_img',
            field=models.TextField(blank=True, null=True),
        ),
    ]
