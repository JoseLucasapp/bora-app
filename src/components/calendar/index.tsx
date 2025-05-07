import React from 'react';
import { Calendar } from 'react-native-calendars';
import { StyleSheet, View } from 'react-native';
import dayjs from 'dayjs';

const trainedDates = ['2025-05-07']; //'2025-05-01'

const today = dayjs().format('YYYY-MM-DD');

const marked = trainedDates.reduce((acc, date) => {
    acc[date] = {
        selected: true,
        selectedColor: '#2196F3',
    };
    return acc;
}, {} as any);

marked[today] = {
    ...marked[today],
    customStyles: {
        container: {
            backgroundColor: '#fff',
            borderColor: '#2196F3',
            borderWidth: 2,
        },
        text: {
            color: '#000',
            fontWeight: 'bold'
        }
    }
};

const CalendarComponent = () => {
    return (
        <View style={styles.calendarContainer}>
            <Calendar
                monthFormat="MMMM"
                theme={{
                    backgroundColor: '#2c2c2c',
                    calendarBackground: '#2c2c2c',
                    dayTextColor: '#fff',
                    textDisabledColor: '#888',
                    arrowColor: '#fff',
                    monthTextColor: '#fff',
                    textMonthFontWeight: 'bold',
                    textDayFontWeight: '500',
                    textSectionTitleColor: '#aaa',
                }}
                markingType={'custom'}
                markedDates={marked}
            />
        </View>
    );
}


const styles = StyleSheet.create({
    calendarContainer: {
        backgroundColor: '#2c2c2c',
        width: 250,
        height: 180,
    }
})
export default CalendarComponent