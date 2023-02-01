import React, { useState, useEffect, Fragment } from "react";
import { useSelector, connect, useDispatch } from "react-redux";
import {
  CButton,
  CFormInput,
  CFormLabel,
  CRow,
  CCol,
  CModal,
  CModalHeader,
  CModalTitle,
  CModalFooter,
  CForm,
} from "@coreui/react";
import Switch from "react-switch";
import CIcon from "@coreui/icons-react";
import {


  cilCash,

} from "@coreui/icons";
import { useTranslation } from "react-i18next";


const DiscountModal = ({ data, updateDiscount }) => {
    const { t } = useTranslation("translation", {
        keyPrefix: "addProduct",
      });
    const [visible, setVisible] = useState(false);

    const [discountValue, setDiscountValue] = useState(data.discount)
    const updateDiscountHandler = (e) => {
      e.preventDefault();

      updateDiscount({
        id: data.id,
        discount: discountValue,
        discount_rate: e.target.discountRate.value,
      }).then(() => setVisible(false));
    };
    return (
      <Fragment>
        <CButton
          color="secondary"
          type="button"
          onClick={() => setVisible(true)}
        >
          <CIcon icon={cilCash}></CIcon>
          {t("discount")}
        </CButton>
        <CModal
          alignment="center"
          visible={visible}
          onClose={() => setVisible(false)}
        >
          <CModalHeader>
            <CModalTitle>{t("discount")}</CModalTitle>
          </CModalHeader>
          <CForm onSubmit={updateDiscountHandler}>
            <CRow
              className="justify-content-center align-items-center"
              xs={{ gutterY: 2 }}
            >
                <CCol xs='auto'>

                <CFormLabel htmlFor="discount">{t("discount")}</CFormLabel>
                </CCol>
              <CCol xs="auto">
                <Switch
                    onChange={e=> setDiscountValue(e)}
                  
                  id="discount"
                  checked={discountValue}
                  name="discount"
                />
              </CCol>
              <CCol xs={10}>
                <CFormLabel htmlFor="discountRate">
                  {t("discountRate")}
                </CFormLabel>
                <CFormInput
                  type="number"
                  max="0.99"
                  step="0.01"
                  id="discountRate"
                  defaultValue={data.discount_rate}
                />
              </CCol>
            </CRow>

            <CModalFooter>
              <CButton color="primary" type="submit">
                {t("submit")}
              </CButton>

              <CButton color="danger" onClick={() => setDiscountForm("")}>
                {t("cancel")}
              </CButton>
            </CModalFooter>
          </CForm>
        </CModal>
      </Fragment>
    );
  };

  export default DiscountModal