/****************************** 
 * Fishing_Task_Mobile *
 ******************************/

import { core, data, sound, util, visual, hardware } from './lib/psychojs-2024.2.4.js';
const { PsychoJS } = core;
const { TrialHandler, MultiStairHandler } = data;
const { Scheduler } = util;
//some handy aliases as in the psychopy scripts;
const { abs, sin, cos, PI: pi, sqrt } = Math;
const { round } = util;


// store info about the experiment session:
let expName = 'fishing_task_mobile';  // from the Builder filename that created this script
let expInfo = {
    'participant': `${util.pad(Number.parseFloat(util.randint(0, 999999)).toFixed(0), 6)}`,
    'session': '001',
};

// Start code blocks for 'Before Experiment'
// init psychoJS:
const psychoJS = new PsychoJS({
  debug: true
});

// open window:
psychoJS.openWindow({
  fullscr: false,
  color: new util.Color([0,0,0]),
  units: 'norm',
  waitBlanking: true,
});
// schedule the experiment:
psychoJS.schedule(psychoJS.gui.DlgFromDict({
  dictionary: expInfo,
  title: expName
}));

const flowScheduler = new Scheduler(psychoJS);
const dialogCancelScheduler = new Scheduler(psychoJS);
psychoJS.scheduleCondition(function() { return (psychoJS.gui.dialogComponent.button === 'OK'); },flowScheduler, dialogCancelScheduler);

// flowScheduler gets run if the participants presses OK
flowScheduler.add(updateInfo); // add timeStamp
flowScheduler.add(experimentInit);
flowScheduler.add(settingsRoutineBegin());
flowScheduler.add(settingsRoutineEachFrame());
flowScheduler.add(settingsRoutineEnd());
flowScheduler.add(instructionsRoutineBegin());
flowScheduler.add(instructionsRoutineEachFrame());
flowScheduler.add(instructionsRoutineEnd());
const trialsLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(trialsLoopBegin(trialsLoopScheduler));
flowScheduler.add(trialsLoopScheduler);
flowScheduler.add(trialsLoopEnd);
flowScheduler.add(display_resultsRoutineBegin());
flowScheduler.add(display_resultsRoutineEachFrame());
flowScheduler.add(display_resultsRoutineEnd());
flowScheduler.add(quitPsychoJS, 'Thank you for your patience.', true);

// quit if user presses Cancel in dialog box:
dialogCancelScheduler.add(quitPsychoJS, 'Thank you for your patience.', false);

psychoJS.start({
  expName: expName,
  expInfo: expInfo,
  resources: [
    // resources:
    {'name': 'boat.png', 'path': 'boat.png'},
    {'name': 'fish.png', 'path': 'fish.png'},
    {'name': 'background.png', 'path': 'background.png'}
  ]
});

psychoJS.experimentLogger.setLevel(core.Logger.ServerLevel.INFO);

var currentLoop;
var frameDur;
async function updateInfo() {
  currentLoop = psychoJS.experiment;  // right now there are no loops
  expInfo['date'] = util.MonotonicClock.getDateStr();  // add a simple timestamp
  expInfo['expName'] = expName;
  expInfo['psychopyVersion'] = '2024.2.4';
  expInfo['OS'] = window.navigator.platform;


  // store frame rate of monitor if we can measure it successfully
  expInfo['frameRate'] = psychoJS.window.getActualFrameRate();
  if (typeof expInfo['frameRate'] !== 'undefined')
    frameDur = 1.0 / Math.round(expInfo['frameRate']);
  else
    frameDur = 1.0 / 60.0; // couldn't get a reliable measure so guess

  // add info from the URL:
  util.addInfoFromUrl(expInfo);
  

  
  psychoJS.experiment.dataFileName = (("." + "/") + `data/${expInfo["participant"]}_${expName}_${expInfo["date"]}`);
  psychoJS.experiment.field_separator = '\t';


  return Scheduler.Event.NEXT;
}

var settingsClock;
var block_time;
var trial_clock;
var block_clock;
var travel_clock;
var animation_clock;
var fish_x_pos;
var fish_y_pos;
var fish_x_change;
var fish_opacity;
var move_fish_flag;
var fish_dist;
var fish_time;
var text_color;
var fish_max_size;
var num_blocks;
var curr_block_num;
var total_earnings;
var fish_to_dollars;
var m;
var a;
var iti;
var median_time;
var total_trials_sampled;
var quantiles;
var wait_times;
var wait_time_trial_num;
var datafile;
var instructionsClock;
var text_11;
var key_resp_4;
var mouse_instructions;
var text_12;
var initialize_blockClock;
var initialize_trialClock;
var possible_fishClock;
var text;
var key_resp;
var mouse_possible_fish;
var text_2;
var fishing_pole_4;
var text_6;
var image_3;
var total_fish;
var time_left;
var fish_animation;
var fish_animation_1;
var fish_animation_2;
var fish_animation_3;
var fish_animation_4;
var trialClock;
var key_resp_2;
var mouse_trial;
var gotValidClick;
var prevButtonState;
var text_3;
var fishing_pole_5;
var fishing_string;
var text_7;
var image_2;
var total_fish_2;
var time_left_2;
var fish_animation_5;
var fish_animation_6;
var fish_animation_7;
var fish_animation_8;
var fish_animation_9;
var fishing_resultsClock;
var text_4;
var fishing_pole_2;
var image;
var text_8;
var image_4;
var total_fish_3;
var time_left_3;
var fish_animation_10;
var fish_animation_11;
var fish_animation_12;
var fish_animation_13;
var fish_animation_14;
var travel_timeClock;
var text_9;
var fishing_pole_3;
var text_10;
var image_5;
var total_fish_4
var time_left_4;
var move_riversClock;
var text_13;
var display_resultsClock;
var fishing_pole;
var text_5;
var key_resp_3;
var mouse_results;
var image_6;
var _key_resp_allKeys;
var _key_resp_2_allKeys;
var _key_resp_3_allKeys;
var _key_resp_4_allKeys;
var block_name;
var blocks;
var boat_pos;
var caught;
var display_resultsComponents;
var display_resultsMaxDuration;
var display_resultsMaxDurationReached;
var fish_obtained;
var fish_price_string;
var fish_size;
var fish_value;
var fish_values;
var fishing_resultsComponents;
var fishing_resultsMaxDuration;
var fishing_resultsMaxDurationReached;
var initialize_blockComponents;
var initialize_blockMaxDuration;
var initialize_blockMaxDurationReached;
var initialize_trialComponents;
var initialize_trialMaxDuration;
var initialize_trialMaxDurationReached;
var instructionsComponents;
var instructionsMaxDuration;
var instructions_index;
var instructions_text;
var keys;
var move_riversComponents;
var move_riversMaxDuration;
var move_riversMaxDurationReached;
var num_keys_pressed;
var possible_fishComponents;
var possible_fishMaxDuration;
var possible_fishMaxDurationReached;
var results_text;
var snapshot;
var travel_timeComponents;
var travel_timeMaxDuration;
var travel_timeMaxDurationReached;
var travel_tracker;
var trialComponents;
var trialMaxDuration;
var trialMaxDurationReached;
var trials;
var globalClock;
var routineTimer;
var background_image;
var wait_time;
var frameRemains;
async function experimentInit() {
  // Initialize components for Routine "settings"
  settingsClock = new util.Clock();
  // Full-screen background image (drawn first so everything renders on top)
  background_image = new visual.ImageStim({
    win: psychoJS.window,
    name: 'background_image',
    image: 'background.png',
    pos: [0, 0],
    size: [2, 2],  // covers full 'norm' space (-1 to 1 on both axes)
    units: 'norm',
    depth: 999,
    interpolate: true,
  });
  background_image.setAutoDraw(true);
  // Run 'Begin Experiment' code from code
  block_time = 180;
  trial_clock = new util.Clock();
  block_clock = new util.Clock();
  travel_clock = new util.Clock();
  animation_clock = new util.Clock();
  fish_x_pos = [-0.5,-0.5,-0.5,-0.5,-0.5];
  fish_y_pos = [-0.5,-0.5,-0.5,-0.5,-0.5];
  fish_x_change = [0,0,0,0,0];
  fish_opacity = [0,0,0,0,0];
  move_fish_flag = [false,false,false,false,false];
  fish_dist = 0.2;
  fish_time = 2;
  text_color = "white";
  fish_values = [1, 2, 3, 6, 9];
  block_name = "All";
  fish_max_size = 9;
  fish_size = 1;
  caught = 0;
  total_earnings = 0;
  block_clock.reset();
  fish_to_dollars = 40;
  [m, a] = [2.5, 0.6];
  iti = 4.0;
  median_time = (m * (Math.pow(2, (1 / a)) - 1));
  total_trials_sampled = 10000;
  quantiles = 4;
  wait_times = [];
  for (var i, _pj_c = 0, _pj_a = util.range(Number.parseInt((total_trials_sampled / quantiles))), _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
      i = _pj_a[_pj_c];
      let quantile_array = Array.from({length: quantiles}, (_, i) => i / quantiles);
      util.shuffle(quantile_array);
      for (var q_start, _pj_f = 0, _pj_d = quantile_array, _pj_e = _pj_d.length; (_pj_f < _pj_e); _pj_f += 1) {
          q_start = _pj_d[_pj_f];
          let random_num_in_quantile = (q_start + (Math.random() / quantiles));
          let wait_time = ((m / Math.pow((1 - random_num_in_quantile), (1 / a))) - m);
          wait_times.push(wait_time);
      }
  }
  wait_time_trial_num = 0;
  datafile = (((((("data/data_" + expInfo["participant"].toString()) + "_") + expName.toString()) + "_") + expInfo["date"].toString()) + ".csv");
  
  // Initialize components for Routine "instructions"
  instructionsClock = new util.Clock();
  text_11 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_11',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.1,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  mouse_instructions = new core.Mouse({win: psychoJS.window});
  mouse_instructions.mouseClock = new util.Clock();
  
  text_12 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_12',
    text: 'Click left and right side of screen to move through instructions.',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.7], draggable: false, height: 0.1,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -3.0 
  });
  
  // Initialize components for Routine "initialize_trial"
  initialize_trialClock = new util.Clock();
  // Initialize components for Routine "possible_fish"
  possible_fishClock = new util.Clock();
  text = new visual.TextStim({
    win: psychoJS.window,
    name: 'text',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.5], draggable: false, height: 0.1,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  mouse_possible_fish = new core.Mouse({win: psychoJS.window});
  mouse_possible_fish.mouseClock = new util.Clock();
  
  text_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_2',
    text: 'Press and hold to fish...',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.7], draggable: false, height: 0.1,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -2.0 
  });
  
  fishing_pole_4 = new visual.ShapeStim ({
    win: psychoJS.window, name: 'fishing_pole_4', 
    vertices: [[-0.122/2.0, -0.446/2.0], [+0.122/2.0, +0.446/2.0]],
    ori: 0.0, 
    pos: [0.0, 0.008], 
    draggable: false, 
    anchor: 'center', 
    lineWidth: 10.0, 
    lineColor: new util.Color('black'), 
    fillColor: new util.Color('black'), 
    colorSpace: 'rgb', 
    opacity: undefined, 
    depth: -3, 
    interpolate: true, 
  });
  
  text_6 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_6',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [(- 0.9), 0.9], draggable: false, height: 0.1,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -4.0 
  });
  
  image_3 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_3', units : undefined, 
    image : 'boat.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [0.0, (- 0.25)], 
    draggable: false,
    size : [0.6, 0.6],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -5.0 
  });
  total_fish = new visual.TextStim({
    win: psychoJS.window,
    name: 'total_fish',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [(- 0.9), 0.9], draggable: false, height: 0.1,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -6.0 
  });
  
  time_left = new visual.TextStim({
    win: psychoJS.window,
    name: 'time_left',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0.9, 0.9], draggable: false, height: 0.1,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -7.0 
  });
  
  fish_animation = new visual.ImageStim({
    win : psychoJS.window,
    name : 'fish_animation', units : undefined, 
    image : 'fish.png', mask : undefined,
    anchor : 'top-center',
    ori : 90.0, 
    pos : [0, 0], 
    draggable: false,
    size : 1.0,
    color : new util.Color([1,1,1]), opacity : 0.0,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -8.0 
  });
  fish_animation_1 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'fish_animation_1', units : undefined, 
    image : 'fish.png', mask : undefined,
    anchor : 'top-center',
    ori : 90.0, 
    pos : [0, 0], 
    draggable: false,
    size : 1.0,
    color : new util.Color([1,1,1]), opacity : 0.0,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -9.0 
  });
  fish_animation_2 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'fish_animation_2', units : undefined, 
    image : 'fish.png', mask : undefined,
    anchor : 'top-center',
    ori : 90.0, 
    pos : [0, 0], 
    draggable: false,
    size : 1.0,
    color : new util.Color([1,1,1]), opacity : 0.0,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -10.0 
  });
  fish_animation_3 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'fish_animation_3', units : undefined, 
    image : 'fish.png', mask : undefined,
    anchor : 'top-center',
    ori : 90.0, 
    pos : [0, 0], 
    draggable: false,
    size : 1.0,
    color : new util.Color([1,1,1]), opacity : 0.0,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -11.0 
  });
  fish_animation_4 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'fish_animation_4', units : undefined, 
    image : 'fish.png', mask : undefined,
    anchor : 'top-center',
    ori : 90.0, 
    pos : [0, 0], 
    draggable: false,
    size : 1.0,
    color : new util.Color([1,1,1]), opacity : 0.0,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -12.0 
  });
  // Initialize components for Routine "trial"
  trialClock = new util.Clock();
  mouse_trial = new core.Mouse({
    win: psychoJS.window,
  });
  mouse_trial.mouseClock = new util.Clock();
  
  text_3 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_3',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.5], draggable: false, height: 0.1,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  fishing_pole_5 = new visual.ShapeStim ({
    win: psychoJS.window, name: 'fishing_pole_5', 
    vertices: [[-0.446/2.0, 0.122/2.0], [+0.446/2.0, -0.122/2.0]],
    ori: 0.0, 
    pos: [(- 0.245), (- 0.154)], 
    draggable: false, 
    anchor: 'center', 
    lineWidth: 10.0, 
    lineColor: new util.Color('black'), 
    fillColor: new util.Color('black'), 
    colorSpace: 'rgb', 
    opacity: undefined, 
    depth: -3, 
    interpolate: true, 
  });
  
  fishing_string = new visual.ShapeStim ({
    win: psychoJS.window, name: 'fishing_string', 
    vertices: [[0, -0.2/2.0], [0, +0.2/2.0]],
    ori: 0.0, 
    pos: [(- 0.468), (- 0.193)], 
    draggable: false, 
    anchor: 'center', 
    lineWidth: 5.0, 
    lineColor: new util.Color('black'), 
    fillColor: new util.Color('black'), 
    colorSpace: 'rgb', 
    opacity: undefined, 
    depth: -4, 
    interpolate: true, 
  });
  
  text_7 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_7',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [(- 0.9), 0.9], draggable: false, height: 0.1,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -5.0 
  });
  
  image_2 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_2', units : undefined, 
    image : 'boat.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [0.0, (- 0.25)], 
    draggable: false,
    size : [0.6, 0.6],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -6.0 
  });
  total_fish_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'total_fish_2',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [(- 0.9), 0.9], draggable: false, height: 0.1,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -7.0 
  });
  
  time_left_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'time_left_2',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0.9, 0.9], draggable: false, height: 0.1,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -8.0 
  });
  
  fish_animation_5 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'fish_animation_5', units : undefined, 
    image : 'fish.png', mask : undefined,
    anchor : 'top-center',
    ori : 90.0, 
    pos : [0, 0], 
    draggable: false,
    size : 1.0,
    color : new util.Color([1,1,1]), opacity : 0.0,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -9.0 
  });
  fish_animation_6 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'fish_animation_6', units : undefined, 
    image : 'fish.png', mask : undefined,
    anchor : 'top-center',
    ori : 90.0, 
    pos : [0, 0], 
    draggable: false,
    size : 1.0,
    color : new util.Color([1,1,1]), opacity : 0.0,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -10.0 
  });
  fish_animation_7 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'fish_animation_7', units : undefined, 
    image : 'fish.png', mask : undefined,
    anchor : 'top-center',
    ori : 90.0, 
    pos : [0, 0], 
    draggable: false,
    size : 1.0,
    color : new util.Color([1,1,1]), opacity : 0.0,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -11.0 
  });
  fish_animation_8 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'fish_animation_8', units : undefined, 
    image : 'fish.png', mask : undefined,
    anchor : 'top-center',
    ori : 90.0, 
    pos : [0, 0], 
    draggable: false,
    size : 1.0,
    color : new util.Color([1,1,1]), opacity : 0.0,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -12.0 
  });
  fish_animation_9 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'fish_animation_9', units : undefined, 
    image : 'fish.png', mask : undefined,
    anchor : 'top-center',
    ori : 90.0, 
    pos : [0, 0], 
    draggable: false,
    size : 1.0,
    color : new util.Color([1,1,1]), opacity : 0.0,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -13.0 
  });
  // Initialize components for Routine "fishing_results"
  fishing_resultsClock = new util.Clock();
  text_4 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_4',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.5], draggable: false, height: 0.1,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  fishing_pole_2 = new visual.ShapeStim ({
    win: psychoJS.window, name: 'fishing_pole_2', 
    vertices: [[-0.122/2.0, -0.446/2.0], [+0.122/2.0, +0.446/2.0]],
    ori: 0.0, 
    pos: [0.0, 0.008], 
    draggable: false, 
    anchor: 'center', 
    lineWidth: 10.0, 
    lineColor: new util.Color('black'), 
    fillColor: new util.Color('black'), 
    colorSpace: 'rgb', 
    opacity: undefined, 
    depth: -2, 
    interpolate: true, 
  });
  
  image = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image', units : undefined, 
    image : 'fish.png', mask : undefined,
    anchor : 'top-center',
    ori : 0.0, 
    pos : [0.061, 0.23], 
    draggable: false,
    size : 1.0,
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -3.0 
  });
  text_8 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_8',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [(- 0.9), 0.9], draggable: false, height: 0.1,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -4.0 
  });
  
  image_4 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_4', units : undefined, 
    image : 'boat.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [0.0, (- 0.25)], 
    draggable: false,
    size : [0.6, 0.6],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -5.0 
  });
  total_fish_3 = new visual.TextStim({
    win: psychoJS.window,
    name: 'total_fish_3',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [(- 0.9), 0.9], draggable: false, height: 0.1,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -6.0 
  });
  
  time_left_3 = new visual.TextStim({
    win: psychoJS.window,
    name: 'time_left_3',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0.9, 0.9], draggable: false, height: 0.1,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -7.0 
  });
  
  fish_animation_10 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'fish_animation_10', units : undefined, 
    image : 'fish.png', mask : undefined,
    anchor : 'top-center',
    ori : 90.0, 
    pos : [0, 0], 
    draggable: false,
    size : 1.0,
    color : new util.Color([1,1,1]), opacity : 0.0,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -8.0 
  });
  fish_animation_11 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'fish_animation_11', units : undefined, 
    image : 'fish.png', mask : undefined,
    anchor : 'top-center',
    ori : 90.0, 
    pos : [0, 0], 
    draggable: false,
    size : 1.0,
    color : new util.Color([1,1,1]), opacity : 0.0,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -9.0 
  });
  fish_animation_12 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'fish_animation_12', units : undefined, 
    image : 'fish.png', mask : undefined,
    anchor : 'top-center',
    ori : 90.0, 
    pos : [0, 0], 
    draggable: false,
    size : 1.0,
    color : new util.Color([1,1,1]), opacity : 0.0,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -10.0 
  });
  fish_animation_13 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'fish_animation_13', units : undefined, 
    image : 'fish.png', mask : undefined,
    anchor : 'top-center',
    ori : 90.0, 
    pos : [0, 0], 
    draggable: false,
    size : 1.0,
    color : new util.Color([1,1,1]), opacity : 0.0,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -11.0 
  });
  fish_animation_14 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'fish_animation_14', units : undefined, 
    image : 'fish.png', mask : undefined,
    anchor : 'top-center',
    ori : 90.0, 
    pos : [0, 0], 
    draggable: false,
    size : 1.0,
    color : new util.Color([1,1,1]), opacity : 0.0,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -12.0 
  });
  // Initialize components for Routine "travel_time"
  travel_timeClock = new util.Clock();
  text_9 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_9',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [(- 0.9), 0.9], draggable: false, height: 0.1,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  fishing_pole_3 = new visual.ShapeStim ({
    win: psychoJS.window, name: 'fishing_pole_3', 
    vertices: [[-0.122/2.0, -0.446/2.0], [+0.122/2.0, +0.446/2.0]],
    ori: 0.0, 
    pos: [0, 0], 
    draggable: false, 
    anchor: 'center', 
    lineWidth: 10.0, 
    lineColor: new util.Color('black'), 
    fillColor: new util.Color('black'), 
    colorSpace: 'rgb', 
    opacity: undefined, 
    depth: -1, 
    interpolate: true, 
  });
  
  text_10 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_10',
    text: 'Travelling to new fishing spot...',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.5], draggable: false, height: 0.1,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -2.0 
  });
  
  image_5 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_5', units : undefined, 
    image : 'boat.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [0, 0], 
    draggable: false,
    size : [0.6, 0.6],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -3.0 
  });
  total_fish_4 = new visual.TextStim({
    win: psychoJS.window,
    name: 'total_fish_4',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [(- 0.9), 0.9], draggable: false, height: 0.1,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -5.0 
  });
  
  time_left_4 = new visual.TextStim({
    win: psychoJS.window,
    name: 'time_left_4',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0.9, 0.9], draggable: false, height: 0.1,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -6.0 
  });
  
  // Initialize components for Routine "display_results"
  display_resultsClock = new util.Clock();
  fishing_pole = new visual.ShapeStim ({
    win: psychoJS.window, name: 'fishing_pole', 
    vertices: [[-0.122/2.0, -0.446/2.0], [+0.122/2.0, +0.446/2.0]],
    ori: 0.0, 
    pos: [0.039, 0.008], 
    draggable: false, 
    anchor: 'center', 
    lineWidth: 10.0, 
    lineColor: new util.Color('black'), 
    fillColor: new util.Color('black'), 
    colorSpace: 'rgb', 
    opacity: undefined, 
    depth: 0, 
    interpolate: true, 
  });
  
  text_5 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_5',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.7], draggable: false, height: 0.1,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  mouse_results = new core.Mouse({win: psychoJS.window});
  mouse_results.mouseClock = new util.Clock();
  
  image_6 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_6', units : undefined, 
    image : 'boat.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [0, 0], 
    draggable: false,
    size : [0.6, 0.6],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -3.0 
  });
  // Create some handy timers
  globalClock = new util.Clock();  // to track the time since experiment started
  routineTimer = new util.CountdownTimer();  // to track time remaining of each (non-slip) routine
  
  return Scheduler.Event.NEXT;
}

var t;
var frameN;
var continueRoutine;
var settingsMaxDurationReached;
var settingsMaxDuration;
var settingsComponents;
function settingsRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'settings' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    settingsClock.reset();
    routineTimer.reset();
    settingsMaxDurationReached = false;
    // update component parameters for each repeat
    psychoJS.experiment.addData('settings.started', globalClock.getTime());
    settingsMaxDuration = null
    // keep track of which components have finished
    settingsComponents = [];
    
    for (const thisComponent of settingsComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}

function settingsRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'settings' ---
    // get current time
    t = settingsClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of settingsComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}

function settingsRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'settings' ---
    for (const thisComponent of settingsComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('settings.stopped', globalClock.getTime());
    // the Routine "settings" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}

var instructionsMaxDurationReached;
var instructions_text_array;
function instructionsRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'instructions' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    instructionsClock.reset();
    routineTimer.reset();
    instructionsMaxDurationReached = false;
    // update component parameters for each repeat
    // Run 'Begin Routine' code from code_7
    instructions_text_array = ["1. In this game, your goal is to catch as much fish as possible within 3 minutes.", "2. At each fishing spot, we use sonar to detect how many pounds the fish weigh.", "3. You can see how big the fish are in the animation below your boat.", "4. Press and hold the screen to cast your line and wait for a fish to bite. Release when you no longer want to wait.", "5. The time it takes to catch a fish is random and does NOT depend on the fish\u2019s size.", (("6. You can catch the average fish in " + util.round(median_time).toString()) + " seconds, but it could be much shorter or longer."), "7. You can leave a fishing spot anytime, but your boat takes some time to move to a new spot.", "8. Try to decide when to keep waiting or move to a new spot to catch the most fish before time runs out.","9. Press the screen to start the game."];
    instructions_index = 0;
    instructions_text = instructions_text_array[instructions_index];
    num_keys_pressed = 0;
    instructions_text = instructions_text_array[instructions_index];
    
    mouse_instructions.leftButton = 0;
    mouse_instructions._prevButtonState = [0, 0, 0];
    mouse_instructions._mouseClickStarted = false;
    psychoJS.experiment.addData('instructions.started', globalClock.getTime());
    instructionsMaxDuration = null
    // keep track of which components have finished
    instructionsComponents = [];
    instructionsComponents.push(text_11);
    instructionsComponents.push(mouse_instructions);
    instructionsComponents.push(text_12);
    
    for (const thisComponent of instructionsComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}

function instructionsRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'instructions' ---
    // get current time
    t = instructionsClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // *mouse_instructions* updates - tap left half to go back, right half to go forward, tap on last slide to start
    if (t >= 0.0 && mouse_instructions.status === PsychoJS.Status.NOT_STARTED) {
      mouse_instructions.tStart = t;
      mouse_instructions.frameNStart = frameN;
      mouse_instructions.status = PsychoJS.Status.STARTED;
      mouse_instructions.mouseClock.reset();
      mouse_instructions._prevButtonState = mouse_instructions.getPressed();
    }
    if (mouse_instructions.status === PsychoJS.Status.STARTED) {
      const buttons = mouse_instructions.getPressed();
      const wasDown = mouse_instructions._prevButtonState[0] === 1;
      const isDown = buttons[0] === 1;
      if (isDown && !wasDown) {
        // new tap: decide direction based on x position
        const pos = mouse_instructions.getPos();
        if (instructions_index >= instructions_text_array.length - 1) {
          continueRoutine = false;
        } else if (pos[0] < 0) {
          instructions_index = Math.max(0, instructions_index - 1);
        } else {
          instructions_index = Math.min(instructions_text_array.length - 1, instructions_index + 1);
        }
        instructions_text = instructions_text_array[instructions_index];
      }
      mouse_instructions._prevButtonState = buttons;
    }
    
    if (text_11.status === PsychoJS.Status.STARTED){ // only update if being drawn
      text_11.setColor(new util.Color(text_color), false);
      text_11.setText(instructions_text, false);
    }
    
    // *text_11* updates
    if (t >= 0.0 && text_11.status === PsychoJS.Status.NOT_STARTED) {
      text_11.tStart = t;
      text_11.frameNStart = frameN;
      text_11.setAutoDraw(true);
    }

    if (text_12.status === PsychoJS.Status.STARTED){ // only update if being drawn
      text_12.setColor(new util.Color(text_color), false);
    }
    
    // *text_12* updates
    if (t >= 0.0 && text_12.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_12.tStart = t;  // (not accounting for frame time here)
      text_12.frameNStart = frameN;  // exact frame index
      
      text_12.setAutoDraw(true);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of instructionsComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}

function instructionsRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'instructions' ---
    for (const thisComponent of instructionsComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('instructions.stopped', globalClock.getTime());
    psychoJS.experiment.addData('mouse_instructions.started', mouse_instructions.tStart);
    // the Routine "instructions" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}

function trialsLoopBegin(trialsLoopScheduler) {
  return async function() {
    // set up handler to look after randomisation of conditions etc
    trials = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 100000, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: undefined,
      seed: undefined, name: 'trials'
    });
    psychoJS.experiment.addLoop(trials); // add the loop to the experiment
    currentLoop = trials;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisTrial of trials) {
      snapshot = trials.getSnapshot();
      trialsLoopScheduler.add(importConditions(snapshot));
      trialsLoopScheduler.add(initialize_trialRoutineBegin(snapshot));
      trialsLoopScheduler.add(initialize_trialRoutineEachFrame());
      trialsLoopScheduler.add(initialize_trialRoutineEnd(snapshot));
      trialsLoopScheduler.add(possible_fishRoutineBegin(snapshot));
      trialsLoopScheduler.add(possible_fishRoutineEachFrame());
      trialsLoopScheduler.add(possible_fishRoutineEnd(snapshot));
      trialsLoopScheduler.add(trialRoutineBegin(snapshot));
      trialsLoopScheduler.add(trialRoutineEachFrame());
      trialsLoopScheduler.add(trialRoutineEnd(snapshot));
      trialsLoopScheduler.add(fishing_resultsRoutineBegin(snapshot));
      trialsLoopScheduler.add(fishing_resultsRoutineEachFrame());
      trialsLoopScheduler.add(fishing_resultsRoutineEnd(snapshot));
      trialsLoopScheduler.add(travel_timeRoutineBegin(snapshot));
      trialsLoopScheduler.add(travel_timeRoutineEachFrame());
      trialsLoopScheduler.add(travel_timeRoutineEnd(snapshot));
      trialsLoopScheduler.add(trialsLoopEndIteration(trialsLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}

async function trialsLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(trials);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}

function trialsLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}

function initialize_trialRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'initialize_trial' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    initialize_trialClock.reset();
    routineTimer.reset();
    initialize_trialMaxDurationReached = false;
    // update component parameters for each repeat
    // Run 'Begin Routine' code from code_3
    fish_value = fish_values[Math.floor(Math.random() * fish_values.length)];
    fish_size = (1 * Math.sqrt((fish_value / fish_max_size)));
    fish_price_string = (fish_value.toString() + "lbs");
    wait_time = wait_times[wait_time_trial_num];
    console.log("Wait time:", wait_time);
    wait_time_trial_num += 1;
    fish_obtained = false;
    
    psychoJS.experiment.addData('initialize_trial.started', globalClock.getTime());
    initialize_trialMaxDuration = null
    // keep track of which components have finished
    initialize_trialComponents = [];
    
    for (const thisComponent of initialize_trialComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}

function initialize_trialRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'initialize_trial' ---
    // get current time
    t = initialize_trialClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of initialize_trialComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}

function initialize_trialRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'initialize_trial' ---
    for (const thisComponent of initialize_trialComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('initialize_trial.stopped', globalClock.getTime());
    // the Routine "initialize_trial" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}

function possible_fishRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'possible_fish' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    possible_fishClock.reset();
    routineTimer.reset();
    possible_fishMaxDurationReached = false;
    // update component parameters for each repeat
    // Run 'Begin Routine' code from code_8
    for (var i=0; i < 5; i++) {
        fish_x_pos[i] = ((1.8 * Math.random()) - 0.9);
        fish_y_pos[i] = ((- 0.4) - (Math.random() * 0.3));
        fish_x_change[i] = 0;
        fish_opacity[i] = 0;
    }
    fish_animation.setOpacity(fish_opacity[0], false);
    fish_animation_1.setOpacity(fish_opacity[0], false);
    fish_animation_2.setOpacity(fish_opacity[0], false);
    fish_animation_3.setOpacity(fish_opacity[0], false);
    fish_animation_4.setOpacity(fish_opacity[0], false);
    animation_clock.reset();
    
    mouse_possible_fish.leftButton = 0;
    mouse_possible_fish._prevButtonState = [0, 0, 0];
    psychoJS.experiment.addData('possible_fish.started', globalClock.getTime());
    // pre-set text to avoid 1-frame flicker on routine start
    const _r0 = Math.max(block_time - block_clock.getTime(), 0);
    time_left.setText(String(Math.floor(_r0/60)).padStart(2,'0')+':'+String(Math.floor(_r0%60)).padStart(2,'0'), false);
    total_fish.setText((total_earnings.toString() + " lbs"), false);
    text.setColor(new util.Color(text_color), false);
    text.setText(("Possible fish: " + fish_price_string), false);
    possible_fishMaxDuration = null
    // keep track of which components have finished
    possible_fishComponents = [];
    possible_fishComponents.push(text);
    possible_fishComponents.push(mouse_possible_fish);
    possible_fishComponents.push(text_2);
    possible_fishComponents.push(fishing_pole_4);
    possible_fishComponents.push(text_6);
    possible_fishComponents.push(image_3);
    possible_fishComponents.push(total_fish);
    possible_fishComponents.push(time_left);
    possible_fishComponents.push(fish_animation);
    possible_fishComponents.push(fish_animation_1);
    possible_fishComponents.push(fish_animation_2);
    possible_fishComponents.push(fish_animation_3);
    possible_fishComponents.push(fish_animation_4);
    
    for (const thisComponent of possible_fishComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}

function possible_fishRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'possible_fish' ---
    // get current time
    t = possible_fishClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    if (text.status === PsychoJS.Status.STARTED){ // only update if being drawn
      text.setColor(new util.Color(text_color), false);
      text.setText(("Possible fish: " + fish_price_string), false);
    }
    
    // *text* updates
    if (t >= 0.0 && text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text.tStart = t;  // (not accounting for frame time here)
      text.frameNStart = frameN;  // exact frame index
      
      text.setAutoDraw(true);
    }
    
    
    // *mouse_possible_fish* updates - tap anywhere to begin fishing
    if (t >= 0.0 && mouse_possible_fish.status === PsychoJS.Status.NOT_STARTED) {
      mouse_possible_fish.tStart = t;
      mouse_possible_fish.frameNStart = frameN;
      mouse_possible_fish.status = PsychoJS.Status.STARTED;
      mouse_possible_fish.mouseClock.reset();
      mouse_possible_fish._prevButtonState = mouse_possible_fish.getPressed();
    }
    if (mouse_possible_fish.status === PsychoJS.Status.STARTED) {
      const buttons = mouse_possible_fish.getPressed();
      const wasDown = mouse_possible_fish._prevButtonState[0] === 1;
      const isDown = buttons[0] === 1;
      if (isDown && !wasDown) {
        continueRoutine = false;
      }
      mouse_possible_fish._prevButtonState = buttons;
    }
    
    
    if (text_2.status === PsychoJS.Status.STARTED){ // only update if being drawn
      text_2.setColor(new util.Color(text_color), false);
    }
    
    // *text_2* updates
    if (t >= 0.0 && text_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_2.tStart = t;  // (not accounting for frame time here)
      text_2.frameNStart = frameN;  // exact frame index
      
      text_2.setAutoDraw(true);
    }
    
    
    // *fishing_pole_4* updates
    if (t >= 0.0 && fishing_pole_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      fishing_pole_4.tStart = t;  // (not accounting for frame time here)
      fishing_pole_4.frameNStart = frameN;  // exact frame index
      
      fishing_pole_4.setAutoDraw(true);
    }
    
    
    if (text_6.status === PsychoJS.Status.STARTED){ // only update if being drawn
      text_6.setColor(new util.Color(text_color), false);
      text_6.setText('', false);
    }
    
    // *text_6* updates
    if (t >= 0.0 && text_6.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_6.tStart = t;  // (not accounting for frame time here)
      text_6.frameNStart = frameN;  // exact frame index
      
      text_6.setAutoDraw(true);
    }
    
    
    // *image_3* updates
    if (t >= 0 && image_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_3.tStart = t;  // (not accounting for frame time here)
      image_3.frameNStart = frameN;  // exact frame index
      
      image_3.setAutoDraw(true);
    }
    
    
    if (total_fish.status === PsychoJS.Status.STARTED){ // only update if being drawn
      total_fish.setColor(new util.Color(text_color), false);
      total_fish.setText((total_earnings.toString() + " lbs"), false);
    }
    
    // *total_fish* updates
    if (t >= 0.0 && total_fish.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      total_fish.tStart = t;  // (not accounting for frame time here)
      total_fish.frameNStart = frameN;  // exact frame index
      
      total_fish.setAutoDraw(true);
    }
    
    
    if (time_left.status === PsychoJS.Status.STARTED){ // only update if being drawn
      time_left.setColor(new util.Color(text_color), false);
      const remaining = Math.max(block_time - block_clock.getTime(), 0);
      const mins = String(Math.floor(remaining / 60)).padStart(2, '0');
      const secs = String(Math.floor(remaining % 60)).padStart(2, '0');
      time_left.setText(`${mins}:${secs}`, false);
    }
    
    // *time_left* updates
    if (t >= 0.0 && time_left.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      time_left.tStart = t;  // (not accounting for frame time here)
      time_left.frameNStart = frameN;  // exact frame index
      
      time_left.setAutoDraw(true);
    }
    
    // Run 'Each Frame' code from code_8
    for (var i=0; i < 5; i++) { 
        fish_x_change[i] = (fish_dist - (fish_dist * Math.cos((((3.14 * animation_clock.getTime()) / fish_time) + ((6.28 * i) / 5)))));
        fish_opacity[i] = (0.5 * Math.sin((((3.14 * animation_clock.getTime()) / fish_time) + ((6.28 * i) / 5))));
        if ((fish_opacity[i] < 0)) {
            fish_x_pos[i] = ((1.8 * Math.random()) - 0.9);
            fish_y_pos[i] = ((- 0.4) - (Math.random() * 0.3));
            fish_opacity[i] = 0;
        }
    }

    if (fish_animation.status === PsychoJS.Status.STARTED){ // only update if being drawn
      fish_animation.setOpacity(fish_opacity[0], false);
      fish_animation.setPos([(fish_x_pos[0] + fish_x_change[0]), fish_y_pos[0]], false);
      fish_animation.setSize([(0.4 * fish_size), (0.4 * fish_size)], false);
    }
    
    // *fish_animation* updates
    if (t >= 0.0 && fish_animation.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      fish_animation.tStart = t;  // (not accounting for frame time here)
      fish_animation.frameNStart = frameN;  // exact frame index
      
      fish_animation.setAutoDraw(true);
    }
    
    
    if (fish_animation_1.status === PsychoJS.Status.STARTED){ // only update if being drawn
      fish_animation_1.setOpacity(fish_opacity[1], false);
      fish_animation_1.setPos([(fish_x_pos[1] + fish_x_change[1]), fish_y_pos[1]], false);
      fish_animation_1.setSize([(0.4 * fish_size), (0.4 * fish_size)], false);
    }
    
    // *fish_animation_1* updates
    if (t >= 0.0 && fish_animation_1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      fish_animation_1.tStart = t;  // (not accounting for frame time here)
      fish_animation_1.frameNStart = frameN;  // exact frame index
      
      fish_animation_1.setAutoDraw(true);
    }
    
    
    if (fish_animation_2.status === PsychoJS.Status.STARTED){ // only update if being drawn
      fish_animation_2.setOpacity(fish_opacity[2], false);
      fish_animation_2.setPos([(fish_x_pos[2] + fish_x_change[2]), fish_y_pos[2]], false);
      fish_animation_2.setSize([(0.4 * fish_size), (0.4 * fish_size)], false);
    }
    
    // *fish_animation_2* updates
    if (t >= 0.0 && fish_animation_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      fish_animation_2.tStart = t;  // (not accounting for frame time here)
      fish_animation_2.frameNStart = frameN;  // exact frame index
      
      fish_animation_2.setAutoDraw(true);
    }
    
    
    if (fish_animation_3.status === PsychoJS.Status.STARTED){ // only update if being drawn
      fish_animation_3.setOpacity(fish_opacity[3], false);
      fish_animation_3.setPos([(fish_x_pos[3] + fish_x_change[3]), fish_y_pos[3]], false);
      fish_animation_3.setSize([(0.4 * fish_size), (0.4 * fish_size)], false);
    }
    
    // *fish_animation_3* updates
    if (t >= 0.0 && fish_animation_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      fish_animation_3.tStart = t;  // (not accounting for frame time here)
      fish_animation_3.frameNStart = frameN;  // exact frame index
      
      fish_animation_3.setAutoDraw(true);
    }
    
    
    if (fish_animation_4.status === PsychoJS.Status.STARTED){ // only update if being drawn
      fish_animation_4.setOpacity(fish_opacity[4], false);
      fish_animation_4.setPos([(fish_x_pos[4] + fish_x_change[4]), fish_y_pos[4]], false);
      fish_animation_4.setSize([(0.4 * fish_size), (0.4 * fish_size)], false);
    }
    
    // *fish_animation_4* updates
    if (t >= 0.0 && fish_animation_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      fish_animation_4.tStart = t;  // (not accounting for frame time here)
      fish_animation_4.frameNStart = frameN;  // exact frame index
      
      fish_animation_4.setAutoDraw(true);
    }
    
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of possible_fishComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}

function possible_fishRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'possible_fish' ---
    for (const thisComponent of possible_fishComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('possible_fish.stopped', globalClock.getTime());
    psychoJS.experiment.addData('mouse_possible_fish.started', mouse_possible_fish.tStart);
    // the Routine "possible_fish" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}

function trialRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'trial' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    trialClock.reset();
    routineTimer.reset();
    trialMaxDurationReached = false;
    // update component parameters for each repeat
    mouse_trial.leftButton = 0;
    mouse_trial.midButton = 0;
    mouse_trial.rightButton = 0;
    mouse_trial.time = [];
    mouse_trial.clicked_name = [];
    mouse_trial._mouseDownStarted = false;
    gotValidClick = false;
    trial_clock.reset();
    
    psychoJS.experiment.addData('trial.started', globalClock.getTime());
    // pre-set timer text to avoid 1-frame flicker on routine start
    const _r1 = Math.max(block_time - block_clock.getTime(), 0);
    time_left_2.setText(String(Math.floor(_r1/60)).padStart(2,'0')+':'+String(Math.floor(_r1%60)).padStart(2,'0'), false);
    total_fish_2.setText((total_earnings.toString() + " lbs"), false);
    text_3.setColor(new util.Color(text_color), false);
    text_3.setText((("Casting for " + fish_value.toString()) + "lbs fish..."), false);
    // set the next fish animation parameters based on the current time in the animation cycle
    for (var i=0; i < 5; i++) { 
        fish_x_change[i] = (fish_dist - (fish_dist * Math.cos((((3.14 * animation_clock.getTime()) / fish_time) + ((6.28 * i) / 5)))));
        fish_opacity[i] = (0.5 * Math.sin((((3.14 * animation_clock.getTime()) / fish_time) + ((6.28 * i) / 5))));
        if ((fish_opacity[i] < 0)) {
            fish_x_pos[i] = ((1.8 * Math.random()) - 0.9);
            fish_y_pos[i] = ((- 0.4) - (Math.random() * 0.3));
            fish_opacity[i] = 0;
        }
    }
    fish_animation_5.setOpacity(fish_opacity[0], false);
    fish_animation_5.setPos([(fish_x_pos[0] + fish_x_change[0]), fish_y_pos[0]], false);
    fish_animation_5.setSize([(0.4 * fish_size), (0.4 * fish_size)], false);
    fish_animation_6.setOpacity(fish_opacity[1], false);
    fish_animation_6.setPos([(fish_x_pos[1] + fish_x_change[1]), fish_y_pos[1]], false);
    fish_animation_6.setSize([(0.4 * fish_size), (0.4 * fish_size)], false);
    fish_animation_7.setOpacity(fish_opacity[2], false);
    fish_animation_7.setPos([(fish_x_pos[2] + fish_x_change[2]), fish_y_pos[2]], false);
    fish_animation_7.setSize([(0.4 * fish_size), (0.4 * fish_size)], false);
    fish_animation_8.setOpacity(fish_opacity[3], false);
    fish_animation_8.setPos([(fish_x_pos[3] + fish_x_change[3]), fish_y_pos[3]], false);
    fish_animation_8.setSize([(0.4 * fish_size), (0.4 * fish_size)], false);
    fish_animation_9.setOpacity(fish_opacity[4], false);
    fish_animation_9.setPos([(fish_x_pos[4] + fish_x_change[4]), fish_y_pos[4]], false);
    fish_animation_9.setSize([(0.4 * fish_size), (0.4 * fish_size)], false);
    animation_clock.reset();
    trialMaxDuration = null
    // keep track of which components have finished
    trialComponents = [];
    trialComponents.push(mouse_trial);
    trialComponents.push(text_3);
    trialComponents.push(fishing_pole_5);
    trialComponents.push(fishing_string);
    trialComponents.push(text_7);
    trialComponents.push(image_2);
    trialComponents.push(total_fish_2);
    trialComponents.push(time_left_2);
    trialComponents.push(fish_animation_5);
    trialComponents.push(fish_animation_6);
    trialComponents.push(fish_animation_7);
    trialComponents.push(fish_animation_8);
    trialComponents.push(fish_animation_9);
    for (const thisComponent of trialComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}

function trialRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'trial' ---
    // get current time
    t = trialClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *mouse_trial* updates
    if (t >= 0.0 && mouse_trial.status === PsychoJS.Status.NOT_STARTED) {
      mouse_trial.tStart = t;
      mouse_trial.frameNStart = frameN;
      mouse_trial.status = PsychoJS.Status.STARTED;
      mouse_trial.mouseClock.reset();
      prevButtonState = mouse_trial.getPressed();
    }

    if (mouse_trial.status === PsychoJS.Status.STARTED) {
      const buttons = mouse_trial.getPressed();
      const isDown = buttons[0] === 1;

      if (isDown && !mouse_trial._mouseDownStarted) {
        // mousedown: start the fishing wait timer
        mouse_trial._mouseDownStarted = true;
        trial_clock.reset();
      } else if (!isDown && mouse_trial._mouseDownStarted) {
        // mouseup before fish caught: end routine without catch
        mouse_trial._mouseDownStarted = false;
        continueRoutine = false;
      }
    }
    
    
    if (text_3.status === PsychoJS.Status.STARTED){ // only update if being drawn
      text_3.setColor(new util.Color(text_color), false);
      text_3.setText((("Casting for " + fish_value.toString()) + "lbs fish..."), false);
    }
    
    // *text_3* updates
    if (t >= 0.0 && text_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_3.tStart = t;  // (not accounting for frame time here)
      text_3.frameNStart = frameN;  // exact frame index
      
      text_3.setAutoDraw(true);
    }
    
    // Run 'Each Frame' code from code_8
    for (var i=0; i < 5; i++) { 
        fish_x_change[i] = (fish_dist - (fish_dist * Math.cos((((3.14 * animation_clock.getTime()) / fish_time) + ((6.28 * i) / 5)))));
        fish_opacity[i] = (0.5 * Math.sin((((3.14 * animation_clock.getTime()) / fish_time) + ((6.28 * i) / 5))));
        if ((fish_opacity[i] < 0)) {
            fish_x_pos[i] = ((1.8 * Math.random()) - 0.9);
            fish_y_pos[i] = ((- 0.4) - (Math.random() * 0.3));
            fish_opacity[i] = 0;
        }
    }
    if ((trial_clock.getTime() > wait_time)) {
        fish_obtained = true;
        continueRoutine = false;
    }
    
    
    // *fishing_pole_5* updates
    if (t >= 0.0 && fishing_pole_5.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      fishing_pole_5.tStart = t;  // (not accounting for frame time here)
      fishing_pole_5.frameNStart = frameN;  // exact frame index
      
      fishing_pole_5.setAutoDraw(true);
    }
    
    
    // *fishing_string* updates
    if (t >= 0.0 && fishing_string.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      fishing_string.tStart = t;  // (not accounting for frame time here)
      fishing_string.frameNStart = frameN;  // exact frame index
      
      fishing_string.setAutoDraw(true);
    }
    
    
    if (text_7.status === PsychoJS.Status.STARTED){ // only update if being drawn
      text_7.setColor(new util.Color(text_color), false);
      text_7.setText('', false);
    }
    
    // *text_7* updates
    if (t >= 0.0 && text_7.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_7.tStart = t;  // (not accounting for frame time here)
      text_7.frameNStart = frameN;  // exact frame index
      
      text_7.setAutoDraw(true);
    }
    
    
    // *image_2* updates
    if (t >= 0 && image_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_2.tStart = t;  // (not accounting for frame time here)
      image_2.frameNStart = frameN;  // exact frame index
      
      image_2.setAutoDraw(true);
    }
    
    
    if (total_fish_2.status === PsychoJS.Status.STARTED){ // only update if being drawn
      total_fish_2.setColor(new util.Color(text_color), false);
      total_fish_2.setText((total_earnings.toString() + " lbs"), false);
    }
    
    // *total_fish_2* updates
    if (t >= 0.0 && total_fish_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      total_fish_2.tStart = t;  // (not accounting for frame time here)
      total_fish_2.frameNStart = frameN;  // exact frame index
      
      total_fish_2.setAutoDraw(true);
    }
    
    
    if (time_left_2.status === PsychoJS.Status.STARTED){ // only update if being drawn
      time_left_2.setColor(new util.Color(text_color), false);
      const remaining = Math.max(block_time - block_clock.getTime(), 0);
      const mins = String(Math.floor(remaining / 60)).padStart(2, '0');
      const secs = String(Math.floor(remaining % 60)).padStart(2, '0');
      time_left_2.setText(`${mins}:${secs}`, false);
    }
    
    // *time_left_2* updates
    if (t >= 0.0 && time_left_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      time_left_2.tStart = t;  // (not accounting for frame time here)
      time_left_2.frameNStart = frameN;  // exact frame index
      
      time_left_2.setAutoDraw(true);
    }


    if (fish_animation_5.status === PsychoJS.Status.STARTED){ // only update if being drawn
      fish_animation_5.setOpacity(fish_opacity[0], false);
      fish_animation_5.setPos([(fish_x_pos[0] + fish_x_change[0]), fish_y_pos[0]], false);
      fish_animation_5.setSize([(0.4 * fish_size), (0.4 * fish_size)], false);
    }
    
    // *fish_animation_5* updates
    if (t >= 0.0 && fish_animation_5.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      fish_animation_5.tStart = t;  // (not accounting for frame time here)
      fish_animation_5.frameNStart = frameN;  // exact frame index
      
      fish_animation_5.setAutoDraw(true);
    }
    
    
    if (fish_animation_6.status === PsychoJS.Status.STARTED){ // only update if being drawn
      fish_animation_6.setOpacity(fish_opacity[1], false);
      fish_animation_6.setPos([(fish_x_pos[1] + fish_x_change[1]), fish_y_pos[1]], false);
      fish_animation_6.setSize([(0.4 * fish_size), (0.4 * fish_size)], false);
    }
    
    // *fish_animation_6* updates
    if (t >= 0.0 && fish_animation_6.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      fish_animation_6.tStart = t;  // (not accounting for frame time here)
      fish_animation_6.frameNStart = frameN;  // exact frame index
      
      fish_animation_6.setAutoDraw(true);
    }
    
    
    if (fish_animation_7.status === PsychoJS.Status.STARTED){ // only update if being drawn
      fish_animation_7.setOpacity(fish_opacity[2], false);
      fish_animation_7.setPos([(fish_x_pos[2] + fish_x_change[2]), fish_y_pos[2]], false);
      fish_animation_7.setSize([(0.4 * fish_size), (0.4 * fish_size)], false);
    }
    
    // *fish_animation_7* updates
    if (t >= 0.0 && fish_animation_7.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      fish_animation_7.tStart = t;  // (not accounting for frame time here)
      fish_animation_7.frameNStart = frameN;  // exact frame index
      
      fish_animation_7.setAutoDraw(true);
    }
    
    
    if (fish_animation_8.status === PsychoJS.Status.STARTED){ // only update if being drawn
      fish_animation_8.setOpacity(fish_opacity[3], false);
      fish_animation_8.setPos([(fish_x_pos[3] + fish_x_change[3]), fish_y_pos[3]], false);
      fish_animation_8.setSize([(0.4 * fish_size), (0.4 * fish_size)], false);
    }
    
    // *fish_animation_8* updates
    if (t >= 0.0 && fish_animation_8.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      fish_animation_8.tStart = t;  // (not accounting for frame time here)
      fish_animation_8.frameNStart = frameN;  // exact frame index
      
      fish_animation_8.setAutoDraw(true);
    }
    
    
    if (fish_animation_9.status === PsychoJS.Status.STARTED){ // only update if being drawn
      fish_animation_9.setOpacity(fish_opacity[4], false);
      fish_animation_9.setPos([(fish_x_pos[4] + fish_x_change[4]), fish_y_pos[4]], false);
      fish_animation_9.setSize([(0.4 * fish_size), (0.4 * fish_size)], false);
    }
    
    // *fish_animation_9* updates
    if (t >= 0.0 && fish_animation_9.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      fish_animation_9.tStart = t;  // (not accounting for frame time here)
      fish_animation_9.frameNStart = frameN;  // exact frame index
      
      fish_animation_9.setAutoDraw(true);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of trialComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}

function trialRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'trial' ---
    for (const thisComponent of trialComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('trial.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(0, level);
    }
    psychoJS.experiment.addData('mouse_trial.started', mouse_trial.tStart);
    psychoJS.experiment.addData('mouse_trial.click_time', mouse_trial.mouseClock.getTime());
    // Run 'End Routine' code from code_4
    psychoJS.experiment.addData("trials.max_time", wait_time);
    psychoJS.experiment.addData("trials.caught", fish_obtained);
    psychoJS.experiment.addData("trials.fish_size", fish_value);
    psychoJS.experiment.addData("trials.block_name", block_name);
    psychoJS.experiment.addData("trials.fish_values", fish_values);
    psychoJS.experiment.addData("trials.wait_time", trial_clock.getTime());
    
    // the Routine "trial" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}

function fishing_resultsRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'fishing_results' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    fishing_resultsClock.reset(routineTimer.getTime());
    routineTimer.add(1.000000);
    fishing_resultsMaxDurationReached = false;
    // update component parameters for each repeat
    if (fish_obtained) {
        results_text = (("You caught it! +" + fish_value.toString()) + "lbs");
        total_earnings += fish_value;
        caught = 1;
        console.log(total_earnings);
    } else {
        results_text = "You did not catch the fish.";
        caught = 0;
    }
    // pre-set image size so it can't flash at wrong size on frame 0
    image.setSize([(0.4 * fish_size) * caught, (0.4 * fish_size) * caught], false);
    
    psychoJS.experiment.addData('fishing_results.started', globalClock.getTime());
    // pre-set timer text to avoid 1-frame flicker on routine start
    const _r2 = Math.max(block_time - block_clock.getTime(), 0);
    time_left_3.setText(String(Math.floor(_r2/60)).padStart(2,'0')+':'+String(Math.floor(_r2%60)).padStart(2,'0'), false);
    total_fish_3.setText((total_earnings.toString() + " lbs"), false);
    fishing_resultsMaxDuration = null
    // keep track of which components have finished
    fishing_resultsComponents = [];
    fishing_resultsComponents.push(text_4);
    fishing_resultsComponents.push(fishing_pole_2);
    fishing_resultsComponents.push(image);
    fishing_resultsComponents.push(text_8);
    fishing_resultsComponents.push(image_4);
    fishing_resultsComponents.push(total_fish_3);
    fishing_resultsComponents.push(time_left_3);
    
    for (const thisComponent of fishing_resultsComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}

function fishing_resultsRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'fishing_results' ---
    // get current time
    t = fishing_resultsClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    if (text_4.status === PsychoJS.Status.STARTED){ // only update if being drawn
      text_4.setColor(new util.Color(text_color), false);
      text_4.setText(results_text, false);
    }
    
    // *text_4* updates
    if (t >= 0.0 && text_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_4.tStart = t;  // (not accounting for frame time here)
      text_4.frameNStart = frameN;  // exact frame index
      
      text_4.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 1.0 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (text_4.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_4.setAutoDraw(false);
    }
    
    // *fishing_pole_2* updates
    if (t >= 0.0 && fishing_pole_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      fishing_pole_2.tStart = t;  // (not accounting for frame time here)
      fishing_pole_2.frameNStart = frameN;  // exact frame index
      
      fishing_pole_2.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 1.0 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (fishing_pole_2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      fishing_pole_2.setAutoDraw(false);
    }
    
    
    if (image.status === PsychoJS.Status.STARTED){ // only update if being drawn
      image.setSize([((0.4 * fish_size) * caught), ((0.4 * fish_size) * caught)], false);
    }
    
    // *image* updates
    if (t >= 0.0 && image.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image.tStart = t;  // (not accounting for frame time here)
      image.frameNStart = frameN;  // exact frame index
      
      image.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 1.0 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (image.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      image.setAutoDraw(false);
    }
    
    
    if (text_8.status === PsychoJS.Status.STARTED){ // only update if being drawn
      text_8.setColor(new util.Color(text_color), false);
      text_8.setText('', false);
    }
    
    // *text_8* updates
    if (t >= 0.0 && text_8.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_8.tStart = t;  // (not accounting for frame time here)
      text_8.frameNStart = frameN;  // exact frame index
      
      text_8.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 1.0 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (text_8.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_8.setAutoDraw(false);
    }
    
    
    // *image_4* updates
    if (t >= 0 && image_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_4.tStart = t;  // (not accounting for frame time here)
      image_4.frameNStart = frameN;  // exact frame index
      
      image_4.setAutoDraw(true);
    }
    
    frameRemains = 0 + 1.0 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (image_4.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      image_4.setAutoDraw(false);
    }
    
    
    if (total_fish_3.status === PsychoJS.Status.STARTED){ // only update if being drawn
      total_fish_3.setColor(new util.Color(text_color), false);
      total_fish_3.setText((total_earnings.toString() + " lbs"), false);
    }
    
    // *total_fish_3* updates
    if (t >= 0.0 && total_fish_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      total_fish_3.tStart = t;  // (not accounting for frame time here)
      total_fish_3.frameNStart = frameN;  // exact frame index
      
      total_fish_3.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 1 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (total_fish_3.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      total_fish_3.setAutoDraw(false);
    }
    
    
    if (time_left_3.status === PsychoJS.Status.STARTED){ // only update if being drawn
      time_left_3.setColor(new util.Color(text_color), false);
      const remaining = Math.max(block_time - block_clock.getTime(), 0);
      const mins = String(Math.floor(remaining / 60)).padStart(2, '0');
      const secs = String(Math.floor(remaining % 60)).padStart(2, '0');
      time_left_3.setText(`${mins}:${secs}`, false);
    }
    
    // *time_left_3* updates
    if (t >= 0.0 && time_left_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      time_left_3.tStart = t;  // (not accounting for frame time here)
      time_left_3.frameNStart = frameN;  // exact frame index
      
      time_left_3.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 1 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (time_left_3.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      time_left_3.setAutoDraw(false);
    }    

    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of fishing_resultsComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}

function fishing_resultsRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'fishing_results' ---
    for (const thisComponent of fishing_resultsComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('fishing_results.stopped', globalClock.getTime());
    // Run 'End Routine' code from code_5
    psychoJS.experiment.addData("trials.total_earnings", total_earnings);
    
    if (fishing_resultsMaxDurationReached) {
        fishing_resultsClock.add(fishing_resultsMaxDuration);
    } else {
        fishing_resultsClock.add(1.000000);
    }
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}

function travel_timeRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'travel_time' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    travel_timeClock.reset();
    routineTimer.reset();
    travel_timeMaxDurationReached = false;
    // update component parameters for each repeat
    // Run 'Begin Routine' code from code_6
    travel_clock.reset();
    boat_pos = 0;
    
    psychoJS.experiment.addData('travel_time.started', globalClock.getTime());
    // pre-set timer text to avoid 1-frame flicker on routine start
    const _r3 = Math.max(block_time - block_clock.getTime(), 0);
    time_left_4.setText(String(Math.floor(_r3/60)).padStart(2,'0')+':'+String(Math.floor(_r3%60)).padStart(2,'0'), false);
    total_fish_4.setText((total_earnings.toString() + " lbs"), false);
    travel_timeMaxDuration = (iti - 1.0)
    // keep track of which components have finished
    travel_timeComponents = [];
    travel_timeComponents.push(text_9);
    travel_timeComponents.push(fishing_pole_3);
    travel_timeComponents.push(text_10);
    travel_timeComponents.push(image_5);
    travel_timeComponents.push(total_fish_4);
    travel_timeComponents.push(time_left_4);
    
    for (const thisComponent of travel_timeComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}

function travel_timeRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'travel_time' ---
    // get current time
    t = travel_timeClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // is it time to end the Routine? (based on local clock)
    if (t > travel_timeMaxDuration) {
        travel_timeMaxDurationReached = true
        continueRoutine = false
    }
    
    if (text_9.status === PsychoJS.Status.STARTED){ // only update if being drawn
      text_9.setColor(new util.Color(text_color), false);
      text_9.setText('', false);
    }
    
    // *text_9* updates
    if (t >= 0.0 && text_9.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_9.tStart = t;  // (not accounting for frame time here)
      text_9.frameNStart = frameN;  // exact frame index
      
      text_9.setAutoDraw(true);
    }
    
    
    if (fishing_pole_3.status === PsychoJS.Status.STARTED){ // only update if being drawn
      fishing_pole_3.setPos([boat_pos, 0.008], false);
    }
    
    // *fishing_pole_3* updates
    if (t >= 0.0 && fishing_pole_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      fishing_pole_3.tStart = t;  // (not accounting for frame time here)
      fishing_pole_3.frameNStart = frameN;  // exact frame index
      
      fishing_pole_3.setAutoDraw(true);
    }
    
    
    if (text_10.status === PsychoJS.Status.STARTED){ // only update if being drawn
      text_10.setColor(new util.Color(text_color), false);
    }
    
    // *text_10* updates
    if (t >= 0.0 && text_10.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_10.tStart = t;  // (not accounting for frame time here)
      text_10.frameNStart = frameN;  // exact frame index
      
      text_10.setAutoDraw(true);
    }
    
    
    if (image_5.status === PsychoJS.Status.STARTED){ // only update if being drawn
      image_5.setPos([boat_pos, (- 0.25)], false);
    }
    
    // *image_5* updates
    if (t >= 0 && image_5.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_5.tStart = t;  // (not accounting for frame time here)
      image_5.frameNStart = frameN;  // exact frame index
      
      image_5.setAutoDraw(true);
    }
    
    // Run 'Each Frame' code from code_6
    travel_tracker = (travel_clock.getTime() / (iti - 1));
    if ((travel_tracker < 0.5)) {
        boat_pos = ((- 2.5) * travel_tracker);
    } else {
        boat_pos = (2.5 - (2.5 * travel_tracker));
    }
    
    
    if (total_fish_4.status === PsychoJS.Status.STARTED){ // only update if being drawn
      total_fish_4.setColor(new util.Color(text_color), false);
      total_fish_4.setText((total_earnings.toString() + " lbs"), false);
    }
    
    // *total_fish_4* updates
    if (t >= 0.0 && total_fish_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      total_fish_4.tStart = t;  // (not accounting for frame time here)
      total_fish_4.frameNStart = frameN;  // exact frame index
      
      total_fish_4.setAutoDraw(true);
    }
    
    
    if (time_left_4.status === PsychoJS.Status.STARTED){ // only update if being drawn
      time_left_4.setColor(new util.Color(text_color), false);
      const remaining = Math.max(block_time - block_clock.getTime(), 0);
      const mins = String(Math.floor(remaining / 60)).padStart(2, '0');
      const secs = String(Math.floor(remaining % 60)).padStart(2, '0');
      time_left_4.setText(`${mins}:${secs}`, false);
    }
    
    // *time_left_4* updates
    if (t >= 0.0 && time_left_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      time_left_4.tStart = t;  // (not accounting for frame time here)
      time_left_4.frameNStart = frameN;  // exact frame index
      
      time_left_4.setAutoDraw(true);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of travel_timeComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}

function travel_timeRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'travel_time' ---
    for (const thisComponent of travel_timeComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('travel_time.stopped', globalClock.getTime());
    // Run 'End Routine' code from code_6
    if ((block_clock.getTime() > block_time)) {
        continueRoutine = false;
        trials.finished = true;
    }
    
    // the Routine "travel_time" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}

function display_resultsRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'display_results' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    display_resultsClock.reset();
    routineTimer.reset();
    display_resultsMaxDurationReached = false;
    // update component parameters for each repeat
    mouse_results.leftButton = 0;
    mouse_results._prevButtonState = [0, 0, 0];
    psychoJS.experiment.addData('display_results.started', globalClock.getTime());
    display_resultsMaxDuration = null
    // keep track of which components have finished
    display_resultsComponents = [];
    display_resultsComponents.push(fishing_pole);
    display_resultsComponents.push(text_5);
    display_resultsComponents.push(mouse_results);
    display_resultsComponents.push(image_6);
    
    for (const thisComponent of display_resultsComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}

function display_resultsRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'display_results' ---
    // get current time
    t = display_resultsClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *fishing_pole* updates
    if (t >= 0.0 && fishing_pole.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      fishing_pole.tStart = t;  // (not accounting for frame time here)
      fishing_pole.frameNStart = frameN;  // exact frame index
      
      fishing_pole.setAutoDraw(true);
    }
    
    
    if (text_5.status === PsychoJS.Status.STARTED){ // only update if being drawn
      text_5.setColor(new util.Color(text_color), false);
      text_5.setText(('Total earnings: ' + total_earnings.toString() + 'lbs \n Click to quit game, and refresh to play again.'), false);
    }
    
    // *text_5* updates
    if (t >= 0.0 && text_5.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_5.tStart = t;  // (not accounting for frame time here)
      text_5.frameNStart = frameN;  // exact frame index
      
      text_5.setAutoDraw(true);
    }
    
    
    // *mouse_results* updates - tap anywhere to quit
    if (t >= 3.0 && mouse_results.status === PsychoJS.Status.NOT_STARTED) {
      mouse_results.tStart = t;
      mouse_results.frameNStart = frameN;
      mouse_results.status = PsychoJS.Status.STARTED;
      mouse_results.mouseClock.reset();
      mouse_results._prevButtonState = mouse_results.getPressed();
    }
    if (mouse_results.status === PsychoJS.Status.STARTED) {
      const buttons = mouse_results.getPressed();
      const wasDown = mouse_results._prevButtonState[0] === 1;
      const isDown = buttons[0] === 1;
      if (isDown && !wasDown) {
        continueRoutine = false;
      }
      mouse_results._prevButtonState = buttons;
    }
    
    
    if (image_6.status === PsychoJS.Status.STARTED){ // only update if being drawn
      image_6.setPos([boat_pos, (- 0.25)], false);
    }
    
    // *image_6* updates
    if (t >= 0 && image_6.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_6.tStart = t;  // (not accounting for frame time here)
      image_6.frameNStart = frameN;  // exact frame index
      
      image_6.setAutoDraw(true);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of display_resultsComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}

function display_resultsRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'display_results' ---
    for (const thisComponent of display_resultsComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('display_results.stopped', globalClock.getTime());
    psychoJS.experiment.addData('mouse_results.started', mouse_results.tStart);
    // the Routine "display_results" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}

function importConditions(currentLoop) {
  return async function () {
    psychoJS.importAttributes(currentLoop.getCurrentTrial());
    return Scheduler.Event.NEXT;
    };
}

async function quitPsychoJS(message, isCompleted) {
  // Check for and save orphaned data
  if (psychoJS.experiment.isEntryEmpty()) {
    psychoJS.experiment.nextEntry();
  }
  psychoJS.window.close();
  psychoJS.quit({message: message, isCompleted: isCompleted});
  
  return Scheduler.Event.QUIT;
}
