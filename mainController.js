app.controller('MainController', ['$scope', function($scope) { 
  $scope.title = 'Character Overview'; 
  function Race(raceName, gender, age, skills) {
  this.raceName = raceName;
	this.gender = gender;
	this.age = age;
	this.skills = skills;
  }
$scope.Character =[];

$scope.Character[0] = new Race("Human", 'Male', 27,{
	strength:{
		power:6,
		combat_technique:1,
		show:false,
		value : function() {return this.power + this.combat_technique;}
	},
	intelligence:{
		foreign_languages:1,
		magic_sense:2,
		show:false,
		value : function() {return this.foreign_languages + this.magic_sense;}
	},
	dexterity:{
		agility:2,
		reflexes:1,
		show:false,
		value : function() {return this.agility + this.reflexes;}
	},
	stamina:{
		tenacity:3,
		less_food_needed:1,
		show:false,
		value : function() {return this.tenacity + this.less_food_needed;}
	},
	perception:{
		observation:1,
		hearing:1,
		show:false,
		value : function() {return this.observation + this.hearing;}
	},
	luck:{value:1
	}
});

$scope.Character[1] = new Race("Half-Orc", 'Male', 40,{
	strength:{
		power:2,
		combat_technique:1,
		show:false,
		value : function() {return this.power + this.combat_technique;}
	},
	intelligence:{
		foreign_languages:1,
		magic_sense:2,
		show:false,
		value : function() {return this.foreign_languages + this.magic_sense;}
	},
	dexterity:{
		agility:2,
		reflexes:1,
		show:false,
		value : function() {return this.agility + this.reflexes;}
	},
	stamina:{
		tenacity:3,
		less_food_needed:1,
		show:false,
		value : function() {return this.tenacity + this.less_food_needed;}
	},
	perception:{
		observation:1,
		hearing:1,
		show:false,
		value : function() {return this.observation + this.hearing;}
	},
	luck:{value:1
	}
});

$scope.Character[2] = new Race("Elf", 'Female', 21,{
	strength:{
		power:2,
		combat_technique:1,
		show:false,
		value : function() {return this.power + this.combat_technique;}
	},
	intelligence:{
		foreign_languages:1,
		magic_sense:2,
		show:false,
		value : function() {return this.foreign_languages + this.magic_sense;}
	},
	dexterity:{
		agility:2,
		reflexes:1,
		show:false,
		value : function() {return this.agility + this.reflexes;}
	},
	stamina:{
		tenacity:3,
		less_food_needed:1,
		show:false,
		value : function() {return this.tenacity + this.less_food_needed;}
	},
	perception:{
		observation:1,
		hearing:1,
		show:false,
		value : function() {return this.observation + this.hearing;}
	},
	luck:{value:1
	}});
	
$scope.Character[3] = new Race("Dwarf", 'Male', 86,{
	strength:{
		power:2,
		combat_technique:1,
		show:false,
		value : function() {return this.power + this.combat_technique;}
	},
	intelligence:{
		foreign_languages:1,
		magic_sense:2,
		show:false,
		value : function() {return this.foreign_languages + this.magic_sense;}
	},
	dexterity:{
		agility:2,
		reflexes:1,
		show:false,
		value : function() {return this.agility + this.reflexes;}
	},
	stamina:{
		tenacity:3,
		less_food_needed:1,
		show:false,
		value : function() {return this.tenacity + this.less_food_needed;}
	},
	perception:{
		observation:1,
		hearing:1,
		show:false,
		value : function() {return this.observation + this.hearing;}
	},
	luck:{value:1
	}});
	
$scope.Character[4] = new Race("Banshee", 'Female', 120, {
	strength:{
		power:2,
		combat_technique:1,
		show:false,
		value : function() {return this.power + this.combat_technique;}
	},
	intelligence:{
		foreign_languages:1,
		magic_sense:2,
		show:false,
		value : function() {return this.foreign_languages + this.magic_sense;}
	},
	dexterity:{
		agility:2,
		reflexes:1,
		show:false,
		value : function() {return this.agility + this.reflexes;}
	},
	stamina:{
		tenacity:3,
		less_food_needed:1,
		show:false,
		value : function() {return this.tenacity + this.less_food_needed;}
	},
	perception:{
		observation:1,
		hearing:1,
		show:false,
		value : function() {return this.observation + this.hearing;}
	},
	luck:{value:1
	}});

$scope.Character[5] = new Race("Neko", 'Female', 7,{
	strength:{
		power:6,
		combat_technique:1,
		show:false,
		value : function() {return this.power + this.combat_technique;}
	},
	intelligence:{
		foreign_languages:1,
		magic_sense:2,
		show:false,
		value : function() {return this.foreign_languages + this.magic_sense;}
	},
	dexterity:{
		agility:2,
		reflexes:1,
		show:false,
		value : function() {return this.agility + this.reflexes;}
	},
	stamina:{
		tenacity:3,
		less_food_needed:1,
		show:false,
		value : function() {return this.tenacity + this.less_food_needed;}
	},
	perception:{
		observation:1,
		hearing:1,
		show:false,
		value : function() {return this.observation + this.hearing;}
	},
	luck:{value:1
	}});
}]);
