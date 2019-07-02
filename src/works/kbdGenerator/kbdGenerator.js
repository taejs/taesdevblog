
export const KeyboardGenerator =    (function() {
    var Keyboard;
    var U = 4; //standard of keycap length
    Keyboard = function(opt = {}) {
      this.layoutType = opt.layoutType || 'FULL';
      this.sizeType = opt.sizeType || 'MINI';
      debugger;
      this.targetElement = opt.targetElement || document.querySelector('#kbd');
    }
    
    Keyboard.prototype._template = function() {
      var t=[];
      var defaultKeyTemplate = function() {
        
      };
      var key = function(className, length) {
        length = length || 1;
        return '<div class="keycap '+ className +'" style="width:'+(U*length)+'px; height:'+(U)+'px"></div>';
      }
      
      var keyTemplate = function(className, length) {
        return function() {
          return key(className, length);
        };
      };
      
      var templates = {
        'function' : function() {
          var f = keyTemplate('function');
          return new Array(12).fill('').map(f).join('')
        },
        'rowE' : function() {
          var f = keyTemplate('rowE');
          return new Array(14).fill('').map(f).join('')
        },
        'ctrl' : function() {
          var f = keyTemplate('ctrl');
          return new Array(3).fill('').map(f).join('')
        }
      };
      
      switch(this.layoutType) {
        case 'FULL':
            t.push(key('esc') + templates['function']() + templates['ctrl']());
            t.push(templates['rowE']() + key('rowE' ,1.5) + templates['ctrl']());
            
          break;
      }
      
      return t.reduce((acc, cur)=>
        { acc += '<div class="row">'+cur+'</div>'; return acc; }, '');
    }
    
    Keyboard.prototype._init = function() {
      this.targetElement.classList.add('keyboard',  this.sizeType.toLowerCase(), this.layoutType.toLowerCase());
      this.targetElement.innerHTML = this._template();
    }
    
    return function(opt) {
      return new Keyboard(opt)
    };
  })();