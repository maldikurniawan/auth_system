# Generated by Django 5.0.6 on 2024-05-28 03:52

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='cache',
            fields=[
                ('idlog', models.IntegerField(primary_key=True, serialize=False)),
                ('timestamp', models.CharField(max_length=50, verbose_name='Waktu')),
                ('ip', models.CharField(max_length=50, verbose_name='ip')),
                ('url', models.CharField(max_length=50, verbose_name='url')),
            ],
        ),
    ]
