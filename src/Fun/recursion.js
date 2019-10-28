console.log(JSON.stringify(create(0), null, 2))

function Klass(i, l, r) {
  this.i = i
  this.l = l
  this.r = r
}

function Frame(i) {
  this.ip = 0;
  this.i = i;
  this.left = null;
}

function create(i) {
  var result;
  var stack = [new Frame(i)];
  while (stack.length > 0) {
    var frame = stack[stack.length - 1];
    switch (frame.ip) {
      case 0:
        if (frame.i === 5) {
          result = undefined;
          stack.pop();
          break;
        }
        stack.push(new Frame(frame.i + 1));
        frame.ip = 1;
        break;
      case 1:
        frame.left = result;
        stack.push(new Frame(frame.i + 1));
        frame.ip = 2;
        break;
      case 2:
        result = new Klass(frame.i, frame.left, result);
        stack.pop();
        break;
    }
  }
  return result;
}