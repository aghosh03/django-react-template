from django.shortcuts import render, redirect
from django.contrib.auth.decorators import login_required, permission_required
from django.utils.decorators import method_decorator
from .forms import RecordForm, SettingsForm
from django.contrib.auth.decorators import login_required


def index(request):
    return render(request, "backend/index.html")

@login_required
def settings(request):
    if request.method != 'POST':
        #No data submitted; create a blank form.
        form = SettingsForm()
    else:
        #POST data submitted; process data.
        form = SettingsForm(data=request.POST)
        if form.is_valid():
            form.save()
            return redirect('backend:index.html')
    
    #Display a blank or invalid form.
    context = {'form': form}
    return render(request, 'backend/index.html', context)


@login_required
def new_record(request):
    if request.method != 'POST':
        #No data submitted; create a blank form.
        form = RecordForm()
    else:
        #POST data submitted; process data.
        form = RecordForm(data=request.POST)
        if form.is_valid():
            form.save()
            return redirect('backend:index.html')
    
    #Display a blank or invalid form.
    context = {'form': form}
    return render(request, 'backend/index.html', context)

