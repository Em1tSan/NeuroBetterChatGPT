import React, { useState } from 'react';
import { useTranslation, Trans } from 'react-i18next';
import PopupModal from '@components/PopupModal';
import AboutIcon from '@icon/AboutIcon';

const AboutMenu = () => {
  const { t } = useTranslation(['main', 'about']);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  return (
    <>
      <a
        className='flex py-2 px-2 items-center gap-3 rounded-md hover:bg-gray-500/10 transition-colors duration-200 text-white cursor-pointer text-sm'
        onClick={() => {
          setIsModalOpen(true);
        }}
      >
        <div>
          <AboutIcon />
        </div>
        {t('about')}
      </a>
      {isModalOpen && (
        <PopupModal
          title={t('about') as string}
          setIsModalOpen={setIsModalOpen}
          cancelButton={false}
        >
          <div className='p-6 border-b border-gray-200 dark:border-gray-600'>
            <div className='min-w-fit text-gray-900 dark:text-gray-300 text-sm flex flex-col gap-3 leading-relaxed'>
              <p>{t('description', { ns: 'about' })}</p>
              <p>
                <Trans
                  i18nKey='sourceCode'
                  ns='about'
                  components={[
                    <a
                      href='https://github.com/Em1tSan/NeuroBetterChatGPT'
                      target='_blank'
                      className='link'
                    />,
                  ]}
                />
              </p>

              <p>
                <Trans
                  i18nKey='initiative.description'
                  ns='about'
                  components={[
                    <a
                      href={t('initiative.link', { ns: 'about' }) as string}
                      target='_blank'
                      className='link'
                    />,
                  ]}
                />
              </p>

              <h2 className='text-lg font-bold'>
                {t('discordServer.title', { ns: 'about' })}
              </h2>
              <p>{t('discordServer.paragraph1', { ns: 'about' })}</p>

              <p>
                <Trans
                  i18nKey='discordServer.paragraph2'
                  ns='about'
                  components={[
                    <a
                      className='link'
                      href='https://discord.gg/g3Qnwy4V6A'
                      target='_blank'
                    />,
                  ]}
                />
              </p>

              <>
                <h2 className='text-lg font-bold'>
                  {t('support.title', { ns: 'about' })}
                </h2>
                <p>{t('support.paragraph1', { ns: 'about' })}</p>
                <p>
                  <Trans
                    i18nKey='support.paragraph2'
                    ns='about'
                    components={[
                      <a
                        href='https://github.com/Em1tSan/NeuroBetterChatGPT'
                        target='_blank'
                        className='link'
                      />,
                    ]}
                  />
                </p>
                <p>{t('support.paragraph3', { ns: 'about' })}</p>

                <div className='flex flex-col items-center gap-4 my-4'>

                  <a href='https://boosty.to/neuroapi' target='_blank'>
                    <img
                      src='https://camo.githubusercontent.com/0eed7b03b82ef4e41db7b7b8ec82c676ffda8c678f07c29283958c99e37ceb0d/68747470733a2f2f75706c6f61642e77696b696d656469612e6f72672f77696b6970656469612f636f6d6d6f6e732f7468756d622f392f39322f426f6f7374795f6c6f676f2e7376672f35313270782d426f6f7374795f6c6f676f2e7376672e706e673f3230323330323039313732313435'
                      alt='Support us through the Boosty platform.'
                    />
                  </a>
                </div>
                <p>{t('support.paragraph4', { ns: 'about' })}</p>
              </>

              <h2 className='text-lg font-bold'>
                {t('privacyStatement.title', { ns: 'about' })}
              </h2>
              <p>{t('privacyStatement.paragraph1', { ns: 'about' })}</p>

              <p>{t('privacyStatement.paragraph2', { ns: 'about' })}</p>
            </div>
          </div>
        </PopupModal>
      )}
    </>
  );
};

export default AboutMenu;
