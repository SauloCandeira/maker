// src/components/Services/Services.tsx

import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import './Services.css';
import { useTranslation } from 'react-i18next';

// ícones
import { FaCode, FaMobileAlt, FaCloud, FaWifi, FaCube, FaPrint, FaBusinessTime, FaProjectDiagram, FaCogs, FaHome, FaMapMarkedAlt, FaGavel, FaHouseUser } from 'react-icons/fa';
import { GiCharging } from 'react-icons/gi';

const Services: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="services-container">
      <h1 className="services-title">{t('services.title')}</h1>

      <Tabs>
        <TabList className="react-tabs__tab-list">
          <Tab className="react-tabs__tab">{t('services.tabs.software')}</Tab>
          <Tab className="react-tabs__tab">{t('services.tabs.electronics')}</Tab>
          <Tab className="react-tabs__tab">{t('services.tabs.3dPrototyping')}</Tab>
          <Tab className="react-tabs__tab">{t('services.tabs.business')}</Tab>
          <Tab className="react-tabs__tab">{t('services.tabs.realEstate')}</Tab>
        </TabList>

        {/* Software */}
        <TabPanel>
          <div className="service-category">
            <div className="service-item">
              <span className="icon" aria-hidden="true"><FaCode /></span>
              <h2>{t('services.software.webDevelopment')}</h2>
              <p>{t('services.software.webDevelopmentDesc')}</p>
            </div>
            <div className="service-item">
              <span className="icon" aria-hidden="true"><FaMobileAlt /></span>
              <h2>{t('services.software.mobileDevelopment')}</h2>
              <p>{t('services.software.mobileDevelopmentDesc')}</p>
            </div>
            <div className="service-item">
              <span className="icon" aria-hidden="true"><FaCloud /></span>
              <h2>{t('services.software.cloud')}</h2>
              <p>{t('services.software.cloudDesc')}</p>
            </div>
            <div className="service-item">
              <span className="icon" aria-hidden="true"><FaWifi /></span>
              <h2>{t('services.software.iot')}</h2>
              <p>{t('services.software.iotDesc')}</p>
            </div>
          </div>
        </TabPanel>

        {/* Electronics */}
        <TabPanel>
          <div className="service-category">
            <div className="service-item">
              <span className="icon" aria-hidden="true"><GiCharging /></span>
              <h2>{t('services.electronics.vehicleMaintenance')}</h2>
              <p>{t('services.electronics.vehicleMaintenanceDesc')}</p>
            </div>
            <div className="service-item">
              <span className="icon" aria-hidden="true"><GiCharging /></span>
              <h2>{t('services.electronics.lithiumBatteryRecovery')}</h2>
              <p>{t('services.electronics.lithiumBatteryRecoveryDesc')}</p>
            </div>
          </div>
        </TabPanel>

        {/* 3D Prototyping */}
        <TabPanel>
          <div className="service-category">
            <div className="service-item">
              <span className="icon" aria-hidden="true"><FaCube /></span>
              <h2>{t('services.prototyping.drawing3d')}</h2>
              <p>{t('services.prototyping.drawing3dDesc')}</p>
            </div>
            <div className="service-item">
              <span className="icon" aria-hidden="true"><FaPrint /></span>
              <h2>{t('services.prototyping.3dPrinting')}</h2>
              <p>{t('services.prototyping.3dPrintingDesc')}</p>
            </div>
          </div>
        </TabPanel>

        {/* Business */}
        <TabPanel>
          <div className="service-category">
            <div className="service-item">
              <span className="icon" aria-hidden="true"><FaBusinessTime /></span>
              <h2>{t('services.business.businessPlan')}</h2>
              <p>{t('services.business.businessPlanDesc')}</p>
            </div>
            <div className="service-item">
              <span className="icon" aria-hidden="true"><FaProjectDiagram /></span>
              <h2>{t('services.business.agileMethodology')}</h2>
              <p>{t('services.business.agileMethodologyDesc')}</p>
            </div>
            <div className="service-item">
              <span className="icon" aria-hidden="true"><FaCogs /></span>
              <h2>{t('services.business.managementSystem')}</h2>
              <p>{t('services.business.managementSystemDesc')}</p>
            </div>
          </div>
        </TabPanel>

        {/* Real Estate */}
        <TabPanel>
          <div className="service-category">
            <div className="service-item">
              <span className="icon" aria-hidden="true"><FaHome /></span>
              <h2>{t('services.realEstate.buySell.title')}</h2>
              <p>{t('services.realEstate.buySell.desc')}</p>
            </div>
            <div className="service-item">
              <span className="icon" aria-hidden="true"><FaMapMarkedAlt /></span>
              <h2>{t('services.realEstate.droneMapping.title')}</h2>
              <p>{t('services.realEstate.droneMapping.desc')}</p>
            </div>
            <div className="service-item">
              <span className="icon" aria-hidden="true"><FaGavel /></span>
              <h2>{t('services.realEstate.auctionProperties.title')}</h2>
              <p>{t('services.realEstate.auctionProperties.desc')}</p>
            </div>
            <div className="service-item">
              <span className="icon" aria-hidden="true"><FaHouseUser /></span>
              <h2>{t('services.realEstate.minhaCasa.title')}</h2>
              <p>{t('services.realEstate.minhaCasa.desc')}</p>
            </div>
          </div>
        </TabPanel>

      </Tabs>
    </div>
  );
};

export default Services;
