from rest_framework import serializers

from home.models import RoleLogin

class RoleLoginSerializer(serializers.ModelSerializer):

    class Meta:
        model = RoleLogin
        fields = ( 'user_id', 'role', 'status' )