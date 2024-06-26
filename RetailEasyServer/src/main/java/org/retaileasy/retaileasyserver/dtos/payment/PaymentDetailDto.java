package org.retaileasy.retaileasyserver.dtos.payment;


import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class PaymentDetailDto {
    private int orderCode;
    private int amount;
    private String description;
    private String buyerName;
    private String buyerPhone;
    private List<PaymentItemDto> items;
    private String cancelUrl;
    private String returnUrl;
    private String signature;
    private long expiredAt;
}
