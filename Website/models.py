from django.db import models
from random import randrange

# Create your models here.
class Brand(models.Model):
    full_name = models.CharField(max_length=150)
    short_name = models.CharField(blank=True , max_length=50)
    foundation_date = models.DateField()
    email = models.EmailField(blank=True,null=True, max_length=554)
    about = models.TextField(blank=True,null=True)
    tag_line = models.CharField(blank=True , max_length=150)
    logo_url = models.URLField(max_length=300)
    address = models.TextField()
    contact_number = models.DecimalField(max_digits=10, decimal_places=0)
    gmap_src = models.TextField(blank=True)

    facebook = models.URLField(blank=True,null=True, max_length=200)
    twitter = models.URLField(blank=True,null=True, max_length=200)
    instagram = models.URLField(blank=True,null=True, max_length=200)

    def __str__(self):
        return self.full_name

    @property
    def random_hero_image(self):
        return self.heroimage_set.all()[randrange(0,self.heroimage_set.count())].image_url    
    @property
    def random_normal_image(self):
        return self.normalimage_set.all()[randrange(0,self.normalimage_set.count())].image_url    

class HeroImage(models.Model):
    brand  = models.ForeignKey(Brand , on_delete=models.CASCADE)
    title = models.CharField(max_length=50)
    caption = models.CharField(max_length=50)
    image_url = models.URLField(max_length=400)

    def __str__(self):
        return self.title

class NormalImage(models.Model):
    brand = models.ForeignKey(Brand , on_delete=models.CASCADE)
    image_url = models.URLField(max_length=300)
    caption = models.CharField(max_length=50)

    def __str__(self):
        return self.caption
    
