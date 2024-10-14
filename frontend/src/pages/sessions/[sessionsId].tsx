import { mdiChartTimelineVariant, mdiUpload } from '@mdi/js';
import Head from 'next/head';
import React, { ReactElement, useEffect, useState } from 'react';
import 'react-toastify/dist/ReactToastify.min.css';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import dayjs from 'dayjs';

import CardBox from '../../components/CardBox';
import LayoutAuthenticated from '../../layouts/Authenticated';
import SectionMain from '../../components/SectionMain';
import SectionTitleLineWithButton from '../../components/SectionTitleLineWithButton';
import { getPageTitle } from '../../config';

import { Field, Form, Formik } from 'formik';
import FormField from '../../components/FormField';
import BaseDivider from '../../components/BaseDivider';
import BaseButtons from '../../components/BaseButtons';
import BaseButton from '../../components/BaseButton';
import FormCheckRadio from '../../components/FormCheckRadio';
import FormCheckRadioGroup from '../../components/FormCheckRadioGroup';
import FormFilePicker from '../../components/FormFilePicker';
import FormImagePicker from '../../components/FormImagePicker';
import { SelectField } from '../../components/SelectField';
import { SelectFieldMany } from '../../components/SelectFieldMany';
import { SwitchField } from '../../components/SwitchField';
import { RichTextField } from '../../components/RichTextField';

import { update, fetch } from '../../stores/sessions/sessionsSlice';
import { useAppDispatch, useAppSelector } from '../../stores/hooks';
import { useRouter } from 'next/router';
import { saveFile } from '../../helpers/fileSaver';
import dataFormatter from '../../helpers/dataFormatter';
import ImageField from '../../components/ImageField';

import { hasPermission } from '../../helpers/userPermissions';

const EditSessions = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const initVals = {
    date: new Date(),

    title: '',

    time: new Date(),

    recording_link: '',

    session_details: '',

    action_items: '',

    prep_summary: '',

    counselor: '',

    student: '',

    organization: '',
  };
  const [initialValues, setInitialValues] = useState(initVals);

  const { sessions } = useAppSelector((state) => state.sessions);

  const { currentUser } = useAppSelector((state) => state.auth);

  const { sessionsId } = router.query;

  useEffect(() => {
    dispatch(fetch({ id: sessionsId }));
  }, [sessionsId]);

  useEffect(() => {
    if (typeof sessions === 'object') {
      setInitialValues(sessions);
    }
  }, [sessions]);

  useEffect(() => {
    if (typeof sessions === 'object') {
      const newInitialVal = { ...initVals };

      Object.keys(initVals).forEach(
        (el) => (newInitialVal[el] = sessions[el] || ''),
      );

      setInitialValues(newInitialVal);
    }
  }, [sessions]);

  const handleSubmit = async (data) => {
    await dispatch(update({ id: sessionsId, data }));
    await router.push('/sessions/sessions-list');
  };

  return (
    <>
      <Head>
        <title>{getPageTitle('Edit sessions')}</title>
      </Head>
      <SectionMain>
        <SectionTitleLineWithButton
          icon={mdiChartTimelineVariant}
          title={'Edit sessions'}
          main
        >
          {''}
        </SectionTitleLineWithButton>
        <CardBox>
          <Formik
            enableReinitialize
            initialValues={initialValues}
            onSubmit={(values) => handleSubmit(values)}
          >
            <Form>
              <FormField label='Date'>
                <DatePicker
                  dateFormat='yyyy-MM-dd hh:mm'
                  showTimeSelect
                  selected={
                    initialValues.date
                      ? new Date(
                          dayjs(initialValues.date).format('YYYY-MM-DD hh:mm'),
                        )
                      : null
                  }
                  onChange={(date) =>
                    setInitialValues({ ...initialValues, date: date })
                  }
                />
              </FormField>

              <FormField label='Title'>
                <Field name='title' placeholder='Title' />
              </FormField>

              <FormField label='Time'>
                <DatePicker
                  dateFormat='yyyy-MM-dd hh:mm'
                  showTimeSelect
                  selected={
                    initialValues.time
                      ? new Date(
                          dayjs(initialValues.time).format('YYYY-MM-DD hh:mm'),
                        )
                      : null
                  }
                  onChange={(date) =>
                    setInitialValues({ ...initialValues, time: date })
                  }
                />
              </FormField>

              <FormField label='LinktotheRecording'>
                <Field name='recording_link' placeholder='LinktotheRecording' />
              </FormField>

              <FormField label='SessionDetails' hasTextareaHeight>
                <Field
                  name='session_details'
                  id='session_details'
                  component={RichTextField}
                ></Field>
              </FormField>

              <FormField label='ActionItems' hasTextareaHeight>
                <Field
                  name='action_items'
                  as='textarea'
                  placeholder='ActionItems'
                />
              </FormField>

              <FormField label='PrepSummary' hasTextareaHeight>
                <Field
                  name='prep_summary'
                  as='textarea'
                  placeholder='PrepSummary'
                />
              </FormField>

              <FormField label='Counselor' labelFor='counselor'>
                <Field
                  name='counselor'
                  id='counselor'
                  component={SelectField}
                  options={initialValues.counselor}
                  itemRef={'users'}
                  showField={'firstName'}
                ></Field>
              </FormField>

              <FormField label='Student' labelFor='student'>
                <Field
                  name='student'
                  id='student'
                  component={SelectField}
                  options={initialValues.student}
                  itemRef={'users'}
                  showField={'firstName'}
                ></Field>
              </FormField>

              {hasPermission(currentUser, 'READ_ORGANIZATIONS') && (
                <FormField label='organization' labelFor='organization'>
                  <Field
                    name='organization'
                    id='organization'
                    component={SelectField}
                    options={initialValues.organization}
                    itemRef={'organizations'}
                    showField={'name'}
                  ></Field>
                </FormField>
              )}

              <BaseDivider />
              <BaseButtons>
                <BaseButton type='submit' color='info' label='Submit' />
                <BaseButton type='reset' color='info' outline label='Reset' />
                <BaseButton
                  type='reset'
                  color='danger'
                  outline
                  label='Cancel'
                  onClick={() => router.push('/sessions/sessions-list')}
                />
              </BaseButtons>
            </Form>
          </Formik>
        </CardBox>
      </SectionMain>
    </>
  );
};

EditSessions.getLayout = function getLayout(page: ReactElement) {
  return (
    <LayoutAuthenticated permission={'UPDATE_SESSIONS'}>
      {page}
    </LayoutAuthenticated>
  );
};

export default EditSessions;
