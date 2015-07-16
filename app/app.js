import angular from 'angular'
import main from './main'

angular.module('application', []);

angular.module('application')
	.controller('MainController', main.Controller);
