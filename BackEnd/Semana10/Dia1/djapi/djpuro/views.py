from django.shortcuts import render, get_object_or_404

from .models import CategoriaModel
from django.http import JsonResponse


def lista_categoria(request):
    # https://docs.djangoproject.com/en/2.2/topics/db/
    categorias = CategoriaModel.objects.all()
    data = {
        'message':'Ok',
        'content': list(categorias.values('descripcion','activo'))
    }
    # JsonResponse => convierte un diccionario en un JSON
    return JsonResponse(data,status=200)


def categoria_id(request,pk):
    categoria = get_object_or_404(CategoriaModel,pk=pk)
    data = {
        'message': 'Ok',
        'content':{
            'descripcion':categoria.descripcion,
            'activo':categoria.activo
        }
    }
    return JsonResponse(data)


# Para evitar la validacion del middleware que evita ataques como CSRF usamos la siguiente libreria
from django.views.decorators.csrf import csrf_exempt
# esta libreria va a hacer pasar desde cualquier lado sin usar las validaciones para ver si ese sitio web no ha sido afecto por un ataque

@csrf_exempt
def agregarCategoria(request):
    if(request.method=='POST'):
        import json
        data = json.loads(request.body.decode('utf-8'))
        print(data)
        print(data['activo'])
        try:
            resultado = CategoriaModel.objects.get(descripcion=data['nombre'])
        except CategoriaModel.DoesNotExist:
            categoria = CategoriaModel(descripcion = data['nombre'], activo=data['activo'])
            categoria.save()
            return JsonResponse({
                'message':'Categoria Ingresada Con exito'
                })
        return JsonResponse({
            'message':'Categoria Ya existe'
        })
    elif request.method=='GET':
        return JsonResponse({
            'message':'Esta url no admite metodo GET'
        },status=404)

@csrf_exempt
def actualizarCategoria(request,pk):
    if request.method=='PUT':
        import json
        data = json.loads(request.body.decode('utf-8'))
        resultado = get_object_or_404(CategoriaModel,pk=pk)
        resultado.descripcion = data['nombre']
        resultado.activo = data['activo']
        resultado.save()
        return JsonResponse({'message':'Se actualizo con exito'})
