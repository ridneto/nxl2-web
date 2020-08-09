import React, { useState, FormEvent, useEffect } from 'react';
import PageHeader from '../../components/PageHeader';
import TeacherItem, { ITeacher } from '../../components/TeacherItem';
import Input from '../../components/Input';
import Select from '../../components/Select';

import api from '../../services/api';

import './styles.css';

interface ISubjectResponse {
  subjects: [{
    ds_subject: string,
    id_subject: string
  }]
}

interface ISubjectItemView{
  value: string,
  label: string
}

const TeacherList: React.FC = () => {
  const [teachers, setTeachers] = useState([])

  const [subject, setSubject] = useState('');
  const [week_day, setWeekDay] = useState('');
  const [time, setTime] = useState('');

  const [subjectList, setSubjectList] = useState<ISubjectItemView[]>([]);

  async function searchTeachers(e: FormEvent){
    e.preventDefault();

    const response = await api.get('classes', {
      params: {
        subject,
        week_day,
        time
      }
    });

    setTeachers(response.data)
  }

  async function populeSubjects(){
    const { data } = await api.get<ISubjectResponse>('subjects')

    if(data.subjects){
      const dataSubjects = data.subjects.map(subject => {
        return {
          value: subject.id_subject,
          label: subject.ds_subject
        }
      })

      setSubjectList(dataSubjects)
    }
  }

  useEffect(() => {
    populeSubjects()
  }, []);

  return (
    <div id="page-teacher-list" className="container">
      <PageHeader title="Estes são os proffys disponíveis">
        <form id="search-teachers" onSubmit={searchTeachers}>
          <Select
            name="subject"
            label="Matéria"
            value={subject}
            onChange={e => { setSubject(e.target.value) }}
            options={subjectList}
          />

          <Select
            name="week_day"
            label="Dia da semana"
            value={week_day}
            onChange={e => { setWeekDay(e.target.value) }}
            options={[
              { value: '0', label: 'Domingo' },
              { value: '1', label: 'Segunda-feira' },
              { value: '2', label: 'Terça-feira' },
              { value: '3', label: 'Quarta-feira' },
              { value: '4', label: 'Quinta-feira' },
              { value: '5', label: 'Sexta-feira' },
              { value: '6', label: 'Sábado' },
            ]}
          />

          <Input
            type="time"
            name="time"
            label="Hora"
            value={time}
            onChange={e => setTime(e.target.value)}
          />

          <button type="submit">Buscar</button>
        </form>
      </PageHeader>

      <main>
        {teachers.map((teacher: ITeacher, index) => {
          return <TeacherItem key={index} teacher={teacher}/>
        })}
     </main>
    </div>
  );
};

export default TeacherList;
