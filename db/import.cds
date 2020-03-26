type BusinessKey : String(10);
type SDate : DateTime;
type CurrencyT : String(5);
type AmountT : Decimal(15, 2);
type QuantityT : Decimal(13, 3);
type UnitT : String(3);
type StatusT : String(1);
    

@cds.persistence.exists
entity PURCHASE_ORDER_ITEM_VIEW {
  key PO_ITEM_ID: Integer;
  PARTNER_ID: BusinessKey;
  key PRODUCT_ID: BusinessKey;
  CURRENCY_CODE: CurrencyT;
  AMOUNT: AmountT;
  NET_AMOUNT: AmountT;
  TAX_AMOUNT: AmountT;
  QUANTITY: QuantityT;
  QUANTITY_UNIT: UnitT;
  DELIVERY_DATE: SDate;
}

@cds.persistence.exists 
Entity BUYER {
 	BUILDING: String(10); 
	CITY: String(40); 
	COMPANYNAME: String(80); 
	COUNTRY: String(3); 
	EMAILADDRESS: String(255); 
	LEGALFORM: String(10);  
	key PARTNERID: Integer; 
	PARTNERROLE: String(3);  
	POSTALCODE: String(10);  
	REGION: String(4);  
	STREET: String(60);  
}

@cds.persistence.exists 
Entity USER_DETAILS {
	 EMAIL: String(255);  
	 FIRSTNAME: String(40);
	 LASTNAME: String(40);
     key USERID: Integer;	 
}

@cds.persistence.exists 
Entity CURRENCY {
	 key CODE: String(3);
	 CURRENCY: String(80);
}
