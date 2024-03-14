import { useState } from 'react';
import ScheduleHeadlineLogo from '../assets/schedule.png';
import { motion } from 'framer-motion';

const ScheduleData = [
    {
        date: "29th March",
        events: [
            {
                headline: "Check-in",
                startTime: "8 AM",
                endTime: "3 PM"
            },
            {
                headline: "Team Formation",
                startTime: "10 AM",
                endTime: "12 PM"
            },
            {
                headline: "Opening ceremony + talks",
                startTime: "12 PM",
                endTime: "2 PM"
            },
            {
                headline: "Hacking begins",
                startTime: "3 PM"
            },
            {
                headline: "Workshops",
                startTime: "4 PM",
                endTime: "8 PM"
            }
        ]
    },
    {
        date: "30th March",
        events: [
            {
                headline: "Mid-way project check by mentors",
                startTime: "12 PM",
                endTime: "2 PM"
            }
        ]
    },
    {
        date: "31st March",
        events: [
            {
                headline: "Project submission deadline",
                startTime: "9 AM"
            },
            {
                headline: "Main event tracks judging + sponsor tracks judging",
                startTime: "10 AM",
                endTime: "1 PM"
            },
            {
                headline: "Sponsor tracks winners's announcement",
                startTime: "4 PM",
                endTime: "4:30 PM"
            },
            {
                headline: "Main tracks winners' announcement",
                startTime: "4:30 PM",
                endTime: "5:15 PM",
            },
            {
                headline: "Closing ceremony",
                startTime: "5:15 PM",
                endTime: "6 PM"
            }
        ]
    }
]

export default function Schedule() {
    const [openSchedule, setOpenSchedule] = useState(false);
    return <div className="schedule-dropdown p-4 sm:p-8 rounded-3xl color-purple flex-wrap text-color-peachish cursor-pointer select-none"
        onClick={() => setOpenSchedule(!openSchedule)}>
        <div className='schedule-dropdown-trigger-content flex flex-row items-center justify-between'>
            <div className="flex flex-col items-start gap-4">
                <img alt="schedule-headline" src={ScheduleHeadlineLogo} className='w-[160px]' />
                <p className='max-md:text-sm'>{"What, when, & where!"}</p>
            </div>
            <span className={`font-semibold text-5xl max-md:text-3xl ${!openSchedule && "duration-200 rotate-90"}`}>
                {openSchedule ? "-" : "+"}
            </span>
        </div>
        {openSchedule && <div className='schedule-content-container mt-12 grid grid-cols-1 gap-12'>
            {ScheduleData.map((schedule, index) => {
                return <ScheduleDayBlock day={index + 1} date={schedule.date} key={index}>
                    {schedule?.events?.map((hackathonEvent, eventIndex) => {
                        return <ScheduleItem
                            key={eventIndex}
                            headline={hackathonEvent.headline}
                            startTime={hackathonEvent.startTime}
                            endTime={hackathonEvent.endTime}
                            threshold={eventIndex* index}
                        />
                    })}
                </ScheduleDayBlock>
            })}
        </div>}
    </div>
}

function ScheduleDayBlock({ children, day, date }) {
    return <div className='schedule-day-block grid grid-cols-1 gap-4'>
        <div className='schedule-day-block-header flex flex-row items-center justify-between'>
            <h3 className="font-semibold text-3xl opacity-50 font-Herokid max-md:text-xl">Day {day}</h3>
            <p className="font-medium text-base">{date}</p>
        </div>
        <div className='schedule-day-content-wrapper mt-4 grid grid-cols-1 gap-4'>
            {children}
        </div>
    </div>
}

function ScheduleItem({ headline, startTime, endTime="", threshold=1 }) {
    return <motion.div className='schedule-item flex flex-row items-center justify-between'
        initial={{
            opacity: 0,
            x: -40 * (threshold+1)
        }}
        animate={{
            opacity: 1,
            x: 0
        }}
    >
        <p className='schedule-item-headline font-bold text-white font-Herokid text-sm md:text-2xl text-left w-[24ch]'>
            {headline}
        </p>
        <p className='schedule-item-timeslot-wrapper text-xs font-semibold md:text-base text-right'>
            {`${startTime}${endTime ? (' - ' + endTime) : ""}`}
        </p>
    </motion.div>
}
