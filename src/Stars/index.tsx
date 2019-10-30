import React, { PureComponent } from 'react';
import paper, { Point, Path } from 'paper';

// constants
const SQRT_3: number = Math.pow(3, 0.5);
let D:number, mousePos:number, position:number;
const count:number = 150;

class StarCanvas extends PureComponent {
    random = (minimum: number, maximum: number) => {
        return Math.round(Math.random() * (maximum - minimum) + minimum);
      }

     map = (n:number, start1:number, stop1:number, start2:number, stop2:number) => {
        return (n - start1) / (stop1 - start1) * (stop2 - start2) + start2;
      };

      buildStars = () => {
        // Create a symbol, which we will use to place instances of later:
        const path: Object = new Path.Circle({
          center: [0, 0],
          radius: 3,
          fillColor: 'white',
          strokeColor: 'purple',
          strokeWidth: 2
        });

        const symbol = new Symbol(path);

        // Place the instances of the symbol:
        for (var i = 0; i < count; i++) {
          // The center position is a random point in the view:
          var center = Point.random().multiply(paper.view.size);
          var placed = symbol.place(center);
          placed.scale(i / count + 0.01);
          placed.data = {
            vector: new Point({
              angle: Math.random() * 360,
              length : (i / count) * Math.random() / 5
            })
          };
        }

        var vector = new Point({
          angle: 45,
          length: 0
        });
      };

      var keepInView = function(item) {
        var position = item.position;
        var viewBounds = paper.view.bounds;
        if (position.isInside(viewBounds))
          return;
        var itemBounds = item.bounds;
        if (position.x > viewBounds.width + 5) {
          position.x = -item.bounds.width;
        }

        if (position.x < -itemBounds.width - 5) {
          position.x = viewBounds.width;
        }

        if (position.y > viewBounds.height + 5) {
          position.y = -itemBounds.height;
        }

        if (position.y < -itemBounds.height - 5) {
          position.y = viewBounds.height
        }
      };

      var moveStars = function(vector) {
        // Run through the active layer's children list and change
        // the position of the placed symbols:
        var layer = project.activeLayer;
        for (var i = 1; i < count + 1; i++) {
          var item = layer.children[i];
          var size = item.bounds.size;
          var length = vector.length / 10 * size.width / 10;
          item.position = item.position.add( vector.normalize(length).add(item.data.vector));
          keepInView(item);
        }
      };
    componentDidMount() {
        paper.install(window);

        paper.setup('space');

        D = Math.max(paper.view.getSize().width, paper.view.getSize().height);

        mousePos = paper.view.center.add([view.bounds.width / 3, 100]);
        position = paper.view.center;

        // Draw the BG
        var background = new Path.Rectangle(view.bounds);
        background.fillColor = '#000';
        buildStars();

        paper.view.draw();

        paper.view.onFrame = function (event) {
            position = position.add((mousePos.subtract(position).divide(10)));
            var vector = (view.center.subtract(position)).divide(10);
            moveStars(vector.multiply(1));
        };

    }
    render() {
        return <>
            <canvas id="space" resize="true"></canvas>
        </>
    }
}

export default StarCanvas