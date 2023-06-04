import { Injectable } from '@angular/core';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import { ToggleShowAnswer } from './application.actions';

type ApplicationStateModel = {
    showAnswer: boolean
}

@State<ApplicationStateModel>({
    name: 'applicationState',
    defaults: {
        showAnswer: false
    }
})
@Injectable()
export class ApplicationState {

    @Action(ToggleShowAnswer)
    toggleShowAnswer(ctx: StateContext<ApplicationStateModel>, action: ToggleShowAnswer) {
        const state = ctx.getState();
        console.log('Toggled me to ', state.showAnswer);
        ctx.setState({
            ...state,
            showAnswer: !state.showAnswer
        });
    }
    
}