from rest_framework.routers import DefaultRouter

from .views import *

router = DefaultRouter()
router.register(r'project', ProjectViewSet, basename='projects')
router.register(r'modules', ModuleViewSet, basename='modules')
router.register(r'questions', QuestionViewSet, basename='questions')
router.register(r'answers', AnswerViewSet, basename='answers')
urlpatterns = router.urls