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
  backgroundImage: 'background.png',
  backgroundFit: 'cover',
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
const blocksLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(blocksLoopBegin(blocksLoopScheduler));
flowScheduler.add(blocksLoopScheduler);
flowScheduler.add(blocksLoopEnd);










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
    {'name': 'boat.png', 'path': 'images/boat.png'},
    {'name': 'fish.png', 'path': 'images/fish.png'},
    {'name': 'background.png', 'path': 'images/background.png'}
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
var fish_value_blocks;
var block_names;
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
var text_12;
var initialize_blockClock;
var initialize_trialClock;
var possible_fishClock;
var text;
var key_resp;
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
var image_6;
var globalClock;
var routineTimer;
async function experimentInit() {
  // Initialize components for Routine "settings"
  settingsClock = new util.Clock();
  // Run 'Begin Experiment' code from code
  block_time = 180;
  trial_clock = new util.Clock();
  block_clock = new util.Clock();
  travel_clock = new util.Clock();
  animation_clock = new util.Clock();
  fish_x_pos = ([(- 0.5)] * 5);
  fish_y_pos = ([(- 0.5)] * 5);
  fish_x_change = ([0] * 5);
  fish_opacity = ([1] * 5);
  move_fish_flag = ([false] * 5);
  fish_dist = 0.2;
  fish_time = 2;
  text_color = "white";
  fish_value_blocks = [[1, 2, 3, 6, 9]];
  block_names = ["All"];
  fish_max_size = 9;
  num_blocks = fish_value_blocks.length;
  curr_block_num = (- 1);
  total_earnings = 0;
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
  
  key_resp_4 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  text_12 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_12',
    text: 'Press Right and Left to move through instructions.\nPress Space to start game.',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.7], draggable: false, height: 0.1,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -3.0 
  });
  
  // Initialize components for Routine "initialize_block"
  initialize_blockClock = new util.Clock();
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
  
  key_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  text_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_2',
    text: 'Press and hold Space to fish...',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.7], draggable: false, height: 0.1,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -2.0 
  });
  
  fishing_pole_4 = new visual.ShapeStim ({
    win: psychoJS.window, name: 'fishing_pole_4', 
    vertices: [[-[0.122, 0.446][0]/2.0, 0], [+[0.122, 0.446][0]/2.0, 0]],
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
    color : new util.Color([1,1,1]), opacity : 1.0,
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
    color : new util.Color([1,1,1]), opacity : 1.0,
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
    color : new util.Color([1,1,1]), opacity : 1.0,
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
    color : new util.Color([1,1,1]), opacity : 1.0,
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
    color : new util.Color([1,1,1]), opacity : 1.0,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -12.0 
  });
  // Initialize components for Routine "trial"
  trialClock = new util.Clock();
  key_resp_2 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
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
    vertices: [[-[0.446, (- 0.122)][0]/2.0, 0], [+[0.446, (- 0.122)][0]/2.0, 0]],
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
    vertices: [[-[0, 0.2][0]/2.0, 0], [+[0, 0.2][0]/2.0, 0]],
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
    color : new util.Color([1,1,1]), opacity : 1.0,
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
    color : new util.Color([1,1,1]), opacity : 1.0,
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
    color : new util.Color([1,1,1]), opacity : 1.0,
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
    color : new util.Color([1,1,1]), opacity : 1.0,
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
    color : new util.Color([1,1,1]), opacity : 1.0,
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
    vertices: [[-[0.122, 0.446][0]/2.0, 0], [+[0.122, 0.446][0]/2.0, 0]],
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
    color : new util.Color([1,1,1]), opacity : 1.0,
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
    color : new util.Color([1,1,1]), opacity : 1.0,
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
    color : new util.Color([1,1,1]), opacity : 1.0,
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
    color : new util.Color([1,1,1]), opacity : 1.0,
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
    color : new util.Color([1,1,1]), opacity : 1.0,
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
    vertices: [[-[0.122, 0.446][0]/2.0, 0], [+[0.122, 0.446][0]/2.0, 0]],
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
  
  // Initialize components for Routine "move_rivers"
  move_riversClock = new util.Clock();
  text_13 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_13',
    text: 'Moving to new river...',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.5], draggable: false, height: 0.1,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  // Initialize components for Routine "display_results"
  display_resultsClock = new util.Clock();
  fishing_pole = new visual.ShapeStim ({
    win: psychoJS.window, name: 'fishing_pole', 
    vertices: [[-[0.122, 0.446][0]/2.0, 0], [+[0.122, 0.446][0]/2.0, 0]],
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
  
  key_resp_3 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
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
    instructions_text_array = ["In this game, your goal is to catch as much fish as possible within 35 minutes.", "The more pounds of fish you earn, the more money we will pay you.", "At each fishing spot, we use sonar to detect how many pounds the fish weigh.", "You can see how big the fish are in the animation below your boat.", "Press and hold the Spacebar to cast your line and wait for a fish to bite. Release the key when you no longer want to wait.", "The time it takes to catch a fish is random and does NOT depend on the fish\u2019s size.", (("You can catch the average fish in " + util.round(median_time).toString()) + " seconds, but it could be much shorter or longer."), "You can leave a fishing spot anytime, but your boat takes some time to move to a new spot.", "Try to decide when to keep waiting or move to a new spot to catch the most fish before time runs out.", "You will fish at four different rivers, which each have different fish available.", "The game will notify you when you move to a new river.", "Your total catch is at the top left, and your time left in the current river is at the top right.", "Press Space to start the game."];
    instructions_index = 0;
    instructions_text = instructions_text_array[instructions_index];
    num_keys_pressed = 0;
    instructions_text = instructions_text_array[instructions_index];
    
    key_resp_4.keys = undefined;
    key_resp_4.rt = undefined;
    _key_resp_4_allKeys = [];
    psychoJS.experiment.addData('instructions.started', globalClock.getTime());
    instructionsMaxDuration = null
    // keep track of which components have finished
    instructionsComponents = [];
    instructionsComponents.push(text_11);
    instructionsComponents.push(key_resp_4);
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
    // Run 'Each Frame' code from code_7
    keys = key_resp_4.getKeys();
    if (keys) {
        console.log(keys);
        if ((keys.slice((- 1))[0] === "right")) {
            instructions_index += 1;
        } else {
            if ((keys.slice((- 1))[0] === "left")) {
                instructions_index -= 1;
            } else {
                if (((keys.slice((- 1))[0] === "space") && (instructions_index >= (instructions_text_array.length - 1)))) {
                    continueRoutine = false;
                } else {
                }
            }
        }
        instructions_index = Math.max(0, instructions_index);
        instructions_index = Math.min(instructions_index, (instructions_text_array.length - 1));
        instructions_text = instructions_text_array[instructions_index];
        key_resp_4.clearEvents();
    }
    
    
    if (text_11.status === PsychoJS.Status.STARTED){ // only update if being drawn
      text_11.setColor(new util.Color(text_color), false);
      text_11.setText(instructions_text, false);
    }
    
    // *text_11* updates
    if (t >= 0.0 && text_11.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_11.tStart = t;  // (not accounting for frame time here)
      text_11.frameNStart = frameN;  // exact frame index
      
      text_11.setAutoDraw(true);
    }
    
    
    // *key_resp_4* updates
    if (t >= 0.0 && key_resp_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_4.tStart = t;  // (not accounting for frame time here)
      key_resp_4.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_4.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_4.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_4.clearEvents(); });
    }
    
    if (key_resp_4.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_4.getKeys({keyList: ['left', 'right', 'space'], waitRelease: false});
      _key_resp_4_allKeys = _key_resp_4_allKeys.concat(theseKeys);
      if (_key_resp_4_allKeys.length > 0) {
        key_resp_4.keys = _key_resp_4_allKeys.map((key) => key.name);  // storing all keys
        key_resp_4.rt = _key_resp_4_allKeys.map((key) => key.rt);
        key_resp_4.duration = _key_resp_4_allKeys.map((key) => key.duration);
      }
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
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp_4.corr, level);
    }
    psychoJS.experiment.addData('key_resp_4.keys', key_resp_4.keys);
    if (typeof key_resp_4.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_4.rt', key_resp_4.rt);
        psychoJS.experiment.addData('key_resp_4.duration', key_resp_4.duration);
        }
    
    key_resp_4.stop();
    // the Routine "instructions" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}

function blocksLoopBegin(blocksLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    blocks = new TrialHandler({
      psychoJS: psychoJS,
      nReps: num_blocks, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: undefined,
      seed: undefined, name: 'blocks'
    });
    psychoJS.experiment.addLoop(blocks); // add the loop to the experiment
    currentLoop = blocks;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisBlock of blocks) {
      snapshot = blocks.getSnapshot();
      blocksLoopScheduler.add(importConditions(snapshot));
      blocksLoopScheduler.add(initialize_blockRoutineBegin(snapshot));
      blocksLoopScheduler.add(initialize_blockRoutineEachFrame());
      blocksLoopScheduler.add(initialize_blockRoutineEnd(snapshot));
      const trialsLoopScheduler = new Scheduler(psychoJS);
      blocksLoopScheduler.add(trialsLoopBegin(trialsLoopScheduler, snapshot));
      blocksLoopScheduler.add(trialsLoopScheduler);
      blocksLoopScheduler.add(trialsLoopEnd);
      blocksLoopScheduler.add(move_riversRoutineBegin(snapshot));
      blocksLoopScheduler.add(move_riversRoutineEachFrame());
      blocksLoopScheduler.add(move_riversRoutineEnd(snapshot));
      blocksLoopScheduler.add(blocksLoopEndIteration(blocksLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}

function trialsLoopBegin(trialsLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
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

async function blocksLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(blocks);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}

function blocksLoopEndIteration(scheduler, snapshot) {
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
      }
    return Scheduler.Event.NEXT;
    }
  };
}

function initialize_blockRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'initialize_block' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    initialize_blockClock.reset();
    routineTimer.reset();
    initialize_blockMaxDurationReached = false;
    // update component parameters for each repeat
    // Run 'Begin Routine' code from code_9
    curr_block_num += 1;
    fish_values = fish_value_blocks[curr_block_num];
    block_name = block_names[curr_block_num];
    console.log("Fish values:", fish_values);
    block_clock.reset();
    text_color = "white";
    
    psychoJS.experiment.addData('initialize_block.started', globalClock.getTime());
    initialize_blockMaxDuration = null
    // keep track of which components have finished
    initialize_blockComponents = [];
    
    for (const thisComponent of initialize_blockComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}

function initialize_blockRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'initialize_block' ---
    // get current time
    t = initialize_blockClock.getTime();
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
    for (const thisComponent of initialize_blockComponents)
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

function initialize_blockRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'initialize_block' ---
    for (const thisComponent of initialize_blockComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('initialize_block.stopped', globalClock.getTime());
    // the Routine "initialize_block" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
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
    fish_value = choice(fish_values);
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
    key_resp.keys = undefined;
    key_resp.rt = undefined;
    _key_resp_allKeys = [];
    // Run 'Begin Routine' code from code_8
    for (var i, _pj_c = 0, _pj_a = util.range(5), _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
        i = _pj_a[_pj_c];
        fish_x_pos[i] = ((1.8 * Math.random()) - 0.9);
        fish_y_pos[i] = ((- 0.4) - (Math.random() * 0.3));
        fish_x_change[i] = 0;
    }
    
    psychoJS.experiment.addData('possible_fish.started', globalClock.getTime());
    possible_fishMaxDuration = null
    // keep track of which components have finished
    possible_fishComponents = [];
    possible_fishComponents.push(text);
    possible_fishComponents.push(key_resp);
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
    
    
    // *key_resp* updates
    if (t >= 0.0 && key_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp.tStart = t;  // (not accounting for frame time here)
      key_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp.clearEvents(); });
    }
    
    if (key_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp.getKeys({keyList: ['space'], waitRelease: false});
      _key_resp_allKeys = _key_resp_allKeys.concat(theseKeys);
      if (_key_resp_allKeys.length > 0) {
        key_resp.keys = _key_resp_allKeys[_key_resp_allKeys.length - 1].name;  // just the last key pressed
        key_resp.rt = _key_resp_allKeys[_key_resp_allKeys.length - 1].rt;
        key_resp.duration = _key_resp_allKeys[_key_resp_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
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
    
    // Run 'Each Frame' code from code_8
    for (var i, _pj_c = 0, _pj_a = util.range(5), _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
        i = _pj_a[_pj_c];
        fish_x_change[i] = (fish_dist - (fish_dist * Math.cos((((3.14 * animation_clock.getTime()) / fish_time) + ((6.28 * i) / 5)))));
        fish_opacity[i] = (0.5 * Math.sin((((3.14 * animation_clock.getTime()) / fish_time) + ((6.28 * i) / 5))));
        if ((fish_opacity[i] < 0)) {
            fish_x_pos[i] = ((1.8 * Math.random()) - 0.9);
            fish_y_pos[i] = ((- 0.4) - (Math.random() * 0.3));
            fish_opacity[i] = 0;
        }
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
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp.corr, level);
    }
    psychoJS.experiment.addData('key_resp.keys', key_resp.keys);
    if (typeof key_resp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp.rt', key_resp.rt);
        psychoJS.experiment.addData('key_resp.duration', key_resp.duration);
        routineTimer.reset();
        }
    
    key_resp.stop();
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
    key_resp_2.keys = undefined;
    key_resp_2.rt = undefined;
    _key_resp_2_allKeys = [];
    // Run 'Begin Routine' code from code_4
    trial_clock.reset();
    
    psychoJS.experiment.addData('trial.started', globalClock.getTime());
    trialMaxDuration = null
    // keep track of which components have finished
    trialComponents = [];
    trialComponents.push(key_resp_2);
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
    
    // *key_resp_2* updates
    if (t >= 0.0 && key_resp_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_2.tStart = t;  // (not accounting for frame time here)
      key_resp_2.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_2.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_2.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_2.clearEvents(); });
    }
    
    if (key_resp_2.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_2.getKeys({keyList: ['space'], waitRelease: true});
      _key_resp_2_allKeys = _key_resp_2_allKeys.concat(theseKeys);
      if (_key_resp_2_allKeys.length > 0) {
        key_resp_2.keys = _key_resp_2_allKeys[_key_resp_2_allKeys.length - 1].name;  // just the last key pressed
        key_resp_2.rt = _key_resp_2_allKeys[_key_resp_2_allKeys.length - 1].rt;
        key_resp_2.duration = _key_resp_2_allKeys[_key_resp_2_allKeys.length - 1].duration;
        // a response ends the routine
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
    
    // Run 'Each Frame' code from code_4
    for (var i, _pj_c = 0, _pj_a = util.range(5), _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
        i = _pj_a[_pj_c];
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
      currentLoop.addResponse(key_resp_2.corr, level);
    }
    psychoJS.experiment.addData('key_resp_2.keys', key_resp_2.keys);
    if (typeof key_resp_2.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_2.rt', key_resp_2.rt);
        psychoJS.experiment.addData('key_resp_2.duration', key_resp_2.duration);
        routineTimer.reset();
        }
    
    key_resp_2.stop();
    // Run 'End Routine' code from code_4
    psychoJS.experiment.addData("trials.max_time", wait_time);
    psychoJS.experiment.addData("trials.caught", fish_obtained);
    psychoJS.experiment.addData("trials.fish_size", fish_value);
    psychoJS.experiment.addData("trials.block", curr_block_num);
    psychoJS.experiment.addData("trials.block_name", block_name);
    psychoJS.experiment.addData("trials.fish_values", fish_values);
    psychoJS.experiment.addData("trials.wait_time", trial_clock.getTime());
    psychoJS.experiment.saveAsWideText(datafile, {"fileCollisionMethod": "overwrite", "delim": "auto"});
    
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
    // Run 'Begin Routine' code from code_5
    if (fish_obtained) {
        results_text = (("You caught it! +" + fish_value.toString()) + "lbs");
        total_earnings += fish_value;
        caught = 1;
        console.log(total_earnings);
    } else {
        results_text = "You did not catch the fish.";
        caught = 0;
    }
    
    psychoJS.experiment.addData('fishing_results.started', globalClock.getTime());
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
    fishing_resultsComponents.push(fish_animation_10);
    fishing_resultsComponents.push(fish_animation_11);
    fishing_resultsComponents.push(fish_animation_12);
    fishing_resultsComponents.push(fish_animation_13);
    fishing_resultsComponents.push(fish_animation_14);
    
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
    
    // Run 'Each Frame' code from code_5
    for (var i, _pj_c = 0, _pj_a = util.range(5), _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
        i = _pj_a[_pj_c];
        fish_x_change[i] = (fish_dist - (fish_dist * Math.cos((((3.14 * animation_clock.getTime()) / fish_time) + ((6.28 * i) / 5)))));
        fish_opacity[i] = (0.5 * Math.sin((((3.14 * animation_clock.getTime()) / fish_time) + ((6.28 * i) / 5))));
        if ((fish_opacity[i] < 0)) {
            fish_x_pos[i] = ((1.8 * Math.random()) - 0.9);
            fish_y_pos[i] = ((- 0.4) - (Math.random() * 0.3));
            fish_opacity[i] = 0;
        }
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
    
    
    if (fish_animation_10.status === PsychoJS.Status.STARTED){ // only update if being drawn
      fish_animation_10.setOpacity(fish_opacity[0], false);
      fish_animation_10.setPos([(fish_x_pos[0] + fish_x_change[0]), fish_y_pos[0]], false);
      fish_animation_10.setSize([(0.4 * fish_size), (0.4 * fish_size)], false);
    }
    
    // *fish_animation_10* updates
    if (t >= 0.0 && fish_animation_10.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      fish_animation_10.tStart = t;  // (not accounting for frame time here)
      fish_animation_10.frameNStart = frameN;  // exact frame index
      
      fish_animation_10.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 1 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (fish_animation_10.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      fish_animation_10.setAutoDraw(false);
    }
    
    
    if (fish_animation_11.status === PsychoJS.Status.STARTED){ // only update if being drawn
      fish_animation_11.setOpacity(fish_opacity[1], false);
      fish_animation_11.setPos([(fish_x_pos[1] + fish_x_change[1]), fish_y_pos[1]], false);
      fish_animation_11.setSize([(0.4 * fish_size), (0.4 * fish_size)], false);
    }
    
    // *fish_animation_11* updates
    if (t >= 0.0 && fish_animation_11.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      fish_animation_11.tStart = t;  // (not accounting for frame time here)
      fish_animation_11.frameNStart = frameN;  // exact frame index
      
      fish_animation_11.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 1 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (fish_animation_11.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      fish_animation_11.setAutoDraw(false);
    }
    
    
    if (fish_animation_12.status === PsychoJS.Status.STARTED){ // only update if being drawn
      fish_animation_12.setOpacity(fish_opacity[2], false);
      fish_animation_12.setPos([(fish_x_pos[2] + fish_x_change[2]), fish_y_pos[2]], false);
      fish_animation_12.setSize([(0.4 * fish_size), (0.4 * fish_size)], false);
    }
    
    // *fish_animation_12* updates
    if (t >= 0.0 && fish_animation_12.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      fish_animation_12.tStart = t;  // (not accounting for frame time here)
      fish_animation_12.frameNStart = frameN;  // exact frame index
      
      fish_animation_12.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 1 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (fish_animation_12.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      fish_animation_12.setAutoDraw(false);
    }
    
    
    if (fish_animation_13.status === PsychoJS.Status.STARTED){ // only update if being drawn
      fish_animation_13.setOpacity(fish_opacity[3], false);
      fish_animation_13.setPos([(fish_x_pos[3] + fish_x_change[3]), fish_y_pos[3]], false);
      fish_animation_13.setSize([(0.4 * fish_size), (0.4 * fish_size)], false);
    }
    
    // *fish_animation_13* updates
    if (t >= 0.0 && fish_animation_13.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      fish_animation_13.tStart = t;  // (not accounting for frame time here)
      fish_animation_13.frameNStart = frameN;  // exact frame index
      
      fish_animation_13.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 1 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (fish_animation_13.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      fish_animation_13.setAutoDraw(false);
    }
    
    
    if (fish_animation_14.status === PsychoJS.Status.STARTED){ // only update if being drawn
      fish_animation_14.setOpacity(fish_opacity[4], false);
      fish_animation_14.setPos([(fish_x_pos[4] + fish_x_change[4]), fish_y_pos[4]], false);
      fish_animation_14.setSize([(0.4 * fish_size), (0.4 * fish_size)], false);
    }
    
    // *fish_animation_14* updates
    if (t >= 0.0 && fish_animation_14.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      fish_animation_14.tStart = t;  // (not accounting for frame time here)
      fish_animation_14.frameNStart = frameN;  // exact frame index
      
      fish_animation_14.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 1 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (fish_animation_14.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      fish_animation_14.setAutoDraw(false);
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

function move_riversRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'move_rivers' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    move_riversClock.reset(routineTimer.getTime());
    routineTimer.add(2.000000);
    move_riversMaxDurationReached = false;
    // update component parameters for each repeat
    psychoJS.experiment.addData('move_rivers.started', globalClock.getTime());
    move_riversMaxDuration = null
    // keep track of which components have finished
    move_riversComponents = [];
    move_riversComponents.push(text_13);
    
    for (const thisComponent of move_riversComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}

function move_riversRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'move_rivers' ---
    // get current time
    t = move_riversClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    if (text_13.status === PsychoJS.Status.STARTED){ // only update if being drawn
      text_13.setColor(new util.Color(text_color), false);
    }
    
    // *text_13* updates
    if (t >= 0.0 && text_13.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_13.tStart = t;  // (not accounting for frame time here)
      text_13.frameNStart = frameN;  // exact frame index
      
      text_13.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 2.0 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (text_13.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_13.setAutoDraw(false);
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
    for (const thisComponent of move_riversComponents)
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

function move_riversRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'move_rivers' ---
    for (const thisComponent of move_riversComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('move_rivers.stopped', globalClock.getTime());
    if (move_riversMaxDurationReached) {
        move_riversClock.add(move_riversMaxDuration);
    } else {
        move_riversClock.add(2.000000);
    }
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
    key_resp_3.keys = undefined;
    key_resp_3.rt = undefined;
    _key_resp_3_allKeys = [];
    psychoJS.experiment.addData('display_results.started', globalClock.getTime());
    display_resultsMaxDuration = null
    // keep track of which components have finished
    display_resultsComponents = [];
    display_resultsComponents.push(fishing_pole);
    display_resultsComponents.push(text_5);
    display_resultsComponents.push(key_resp_3);
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
      text_5.setText((((('Total earnings: ' + str(total_earnings)) + 'lbs = $') + str((total_earnings / fish_to_dollars))) + '\n Press call the experimenter over. Press Left to quit game.'), false);
    }
    
    // *text_5* updates
    if (t >= 0.0 && text_5.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_5.tStart = t;  // (not accounting for frame time here)
      text_5.frameNStart = frameN;  // exact frame index
      
      text_5.setAutoDraw(true);
    }
    
    
    // *key_resp_3* updates
    if (t >= 0.0 && key_resp_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_3.tStart = t;  // (not accounting for frame time here)
      key_resp_3.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_3.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_3.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_3.clearEvents(); });
    }
    
    if (key_resp_3.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_3.getKeys({keyList: ['left'], waitRelease: false});
      _key_resp_3_allKeys = _key_resp_3_allKeys.concat(theseKeys);
      if (_key_resp_3_allKeys.length > 0) {
        key_resp_3.keys = _key_resp_3_allKeys[_key_resp_3_allKeys.length - 1].name;  // just the last key pressed
        key_resp_3.rt = _key_resp_3_allKeys[_key_resp_3_allKeys.length - 1].rt;
        key_resp_3.duration = _key_resp_3_allKeys[_key_resp_3_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
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
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp_3.corr, level);
    }
    psychoJS.experiment.addData('key_resp_3.keys', key_resp_3.keys);
    if (typeof key_resp_3.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_3.rt', key_resp_3.rt);
        psychoJS.experiment.addData('key_resp_3.duration', key_resp_3.duration);
        routineTimer.reset();
        }
    
    key_resp_3.stop();
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
