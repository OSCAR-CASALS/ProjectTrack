from django.shortcuts import render

# Create your views here.
def home(request):
    return render(request, 'home.html')

def HorrorStories(request):
		return render(request, 'HorrorStories.html')

def RomanConverter(request):
		return render(request, 'RomanConverter.html')

def RandomQuotes(request):
		return render(request, 'RandomQuotes.html')

def SpaceInvaders(request):
		return render(request, 'SpaceInvaders.html')

def SmithWaterman(request):
		return render(request, 'SmithWaterman.html')

def HeartFailure(request):
		return render(request, 'HeartFailure.html')

def FinalDegreeProject(request):
		return render(request, 'FinalDegreeProject.html')
