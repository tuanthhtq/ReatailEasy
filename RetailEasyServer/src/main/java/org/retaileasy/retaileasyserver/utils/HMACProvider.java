package org.retaileasy.retaileasyserver.utils;

import org.apache.commons.codec.digest.HmacUtils;

public class HMACProvider {

    public static String hmacSha256(String data) {
        String checksum = "fe84db5a9258f4a77c3c8c21223920c6059a835ebaf0eeacded22b8c17ea3991";
        return new HmacUtils("HmacSHA256", checksum).hmacHex(data);
    }
}
