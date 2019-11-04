import React, { PureComponent, createRef } from 'react';
import paper, { Point, Path, project, view } from 'paper';
import { ProjectProps, PaperProps } from './models';

// constants
const paperScope: PaperProps = (paper as any);
let mousePos: any, position: any;
const count: number = 89;
const width: number = window.innerWidth || 0;
const height: number = window.innerHeight || 0;

interface CanvasStars extends HTMLCanvasElement {
  id: string,
  height: number,
  width: number,
}


class StarCanvas extends PureComponent {
  private canvasRef = createRef<CanvasStars>();

  buildStars = () => {
    // Create a symbol, which we will use to place instances of later:
    const path: Object = new Path.Circle({
      center: [0, 0],
      radius: 2,
      fillColor: 'rgba(255, 255, 255, 1)',
      strokeColor: 'rgba(153, 10, 37, 1)',
      strokeWidth: 1
    });

    const symbol = new (Symbol as any)(path);

    // Place the instances of the symbol:
    for (let i = 0; i < count; i++) {
      // The center position is a random point in the view:
      const center: object = Point.random().multiply(paperScope.view.size);
      const placed: any = symbol.place(center);
      placed.scale(i / count + 0.01);
      placed.data = {
        vector: new Point({
          angle: Math.random() * 610,
          length: (i / count) * Math.random() / 8
        })
      };
    }
  };

  keepInView = (item: ProjectProps) => {
    var position = item.position;
    var viewBounds = paperScope.view.bounds;
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

  moveStars = (vector: any) => {
    // Run through the active layer's children list and change
    // the position of the placed symbols:
    var layer = (project as any).activeLayer;
    for (var i = 1; i < count + 1; i++) {
      var item = layer.children[i];
      var size = item.bounds.size;
      var length = vector.length / 10 * size.width / 10;
      item.position = item.position.add(vector.normalize(length).add(item.data.vector));
      this.keepInView(item);
    }
  };

  componentDidMount() {
    if (this.canvasRef.current) {
      this.canvasRef.current.width = width;
      this.canvasRef.current.height = height;
    }

    paperScope.install(window);
    paperScope.setup(this.canvasRef.current);

    mousePos = paperScope.view.center.add([(view as any).bounds.width / 3, 100]);
    position = paperScope.view.center;

    // Draw the BG
    var background = new (Path as any).Rectangle(view.bounds);
    background.fillColor = '#000';
    this.buildStars();

    paperScope.view.draw();

    paperScope.view.onFrame = () => {
      position = position.add((mousePos.subtract(position).divide(10)));
      var vector = ((view as any).center.subtract(position)).divide(10);
      this.moveStars(vector.multiply(3));
    };

  }
  render() {
    return <>
      <canvas
        ref={this.canvasRef}
        id="space"
      />
    </>
  }
}

export default StarCanvas;
