from django.conf import settings

def add_variable_to_context(request):
    user = request.user
    # print(user.employee)
    return {
        'server_image': settings.SERVER_IMAGE,
        'user': user
    }

def dictfetchall(cursor): 
    "Returns all rows from a cursor as a dict" 
    desc = cursor.description 
    return [
        dict(zip([col[0] for col in desc], row)) 
        for row in cursor.fetchall() 
    ]