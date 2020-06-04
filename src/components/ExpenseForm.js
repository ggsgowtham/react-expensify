import React from 'react';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';

const now = moment();

console.log(now.format('MMM'));

export default class ExpenseForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            description: props.expense ? props.expense.description : '',
            note: props.expense ? props.expense.note : '',
            amount: props.expense ? (props.expense.amount / 100).toString() : '',
            error: '',
            createdAt: props.expense ? moment(props.expense.createdAt) : moment(),
            calendarfocused: false
        };
    }
    

    onDescriptionChange = (e) => {
        const description = e.target.value;
        this.setState(() => ({ description }));
    };

    onTextAreaChange = (e) => {
        const note = e.target.value;
        this.setState(() => ({ note }));
        // e.persist();
        // this.setState(() => ({ note: e.target.value }));
    };
    onAmountChange = (e) => {
        const amount = e.target.value;
        if(!!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
            this.setState(()=>({ amount }));
        }
    };

    onChangeDate = (createdAt) => {
        if(createdAt) {
            this.setState(() => ({ createdAt }));
        }
    };

    onFocusChange = ({focused}) => {
        this.setState(()=>({ calendarfocused: focused }));
    };

    onSubmit = (e) => {
        e.preventDefault();
        if(!this.state.description || !this.state.amount) {
            this.setState(() => ({ error: 'please provide description and amount' }));
        }else {
            this.setState(() => ({ error: '' }));
            this.props.onSubmit({
                description: this.state.description,
                amount: parseFloat(this.state.amount, 10) * 100,
                createdAt: this.state.createdAt.valueOf(),
                note: this.state.note
            });
        }
    }

    render() {
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.onSubmit}>
                    <input 
                    type="text" 
                    placeholder="Description"
                    value = {this.state.description}
                    onChange={this.onDescriptionChange}
                    autoFocus
                    />
                    <input 
                    type="number"
                    placeholder="Amount"
                    value={this.state.amount}
                    onChange = {this.onAmountChange}
                    />

                    <SingleDatePicker
                        date={this.state.createdAt} // momentPropTypes.momentObj or null
                        onDateChange={this.onChangeDate} // PropTypes.func.isRequired
                        focused={this.state.calendarfocused} // PropTypes.bool
                        onFocusChange={this.onFocusChange} // PropTypes.func.isRequired
                        numberOfMonths={1}
                        isOutsideRange = {() => false}
                    />

                    <textarea
                    placeholder="Add a note for your expense (Optional)"
                    value = {this.state.note}
                    onChange={this.onTextAreaChange}
                    >
                    </textarea>

                    <button>Add Expense</button>
                </form>
            </div>
        );
    }
}