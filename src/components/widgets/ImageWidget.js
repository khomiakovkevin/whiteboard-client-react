import WidgetButtons from "../WidgetButtons";
import React from "react";

const ImageWidget = ({
                         index, widget, widgets, deleteWidget, moveWidgetUp, moveWidgetDown,
                         updateWidget, Previewed, topicId
                     }) =>

    <div className="mb-5 card p-1">
        {
            !Previewed &&
            <div>
                <div className="form-group row ml-sm-2 col-sm-12">
                    <h4 className="mr-auto">Image Widget</h4>
                    <WidgetButtons
                        index={index}
                        widget={widget}
                        widgets={widgets}
                        moveWidgetUp={moveWidgetUp}
                        moveWidgetDown={moveWidgetDown}
                        topicId={topicId}
                        deleteWidget={deleteWidget}
                        updateWidget={updateWidget}
                    />
                </div>
                <div className="row ml-sm-2 col-sm-12">
                    <input className="form-control" placeholder="http://lorempixel.com/300/150/"
                           defaultValue={widget.src}
                           onChange={(event) => updateWidget(widget.id, {...widget, src: event.target.value})}/>
                </div>
                <div className="row ml-sm-2 col-sm-12">
                    <input className="form-control" placeholder="Widget name"
                           onChange={(event) => updateWidget(widget.id, {...widget, name: event.target.value})}
                           defaultValue={widget.name}/>
                </div>
                <div className="row ml-sm-2 col-sm-12">
                    <h4>Preview</h4>
                </div>
            </div>
        }
        < div className="row ml-sm-2 col-sm-12">
            <img className="img" height="150" src={widget.src} width="300"/>
        </div>
    </div>

export default ImageWidget