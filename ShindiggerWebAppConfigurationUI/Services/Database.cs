using Microsoft.Data.SqlClient;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Dapper;
using Microsoft.Extensions.Configuration;


namespace ShindiggerWebAppConfigurationUI.Services
{

    public interface IDatabase
    {

    }

    public class Database:IDatabase
    {

        // public static string _connString;
        public static string connString = $@"data source=DESKTOP-C4IC0RN\MSSQLSERVER2012;initial catalog=DebitCard_Data;persist security info=False;user id=intercard02;password=,rhsm098;workstation id=PHOFFICE01;packet size=4096";

        
        public static List<Locale> GetLocales()
        {
             
            List<Locale> locales;
             
            string query = $@"
                          SELECT TOP (1000) [CorpID]	
                          ,DL.[LCIDDecimal]      
	                      ,DA.LCIDString AS 'Name'
                          FROM [DebitCard_Data].[dbo].[DC_Locale] DL  INNER JOIN DC_All_Possible_Locales DA ON DL.LCIDDecimal = DA.LCIDDecimal
                            ";

            using (var connection = new SqlConnection(connString))
            {
                locales = connection.Query<Locale>(query).AsList();
            }

            return locales;
        }


        public static int UpdateLocale(int corpId, int lcid)
        {
                         
            string query = $@"
                          UPDATE [dbo].[DC_Locale] SET IsDefault = 0 WHERE CorpID = {corpId};
                          UPDATE [dbo].[DC_Locale] SET IsDefault = 1 WHERE [LCIDDecimal] = {lcid} AND CorpID = {corpId};
                            ";

            using (var connection = new SqlConnection(connString))
            {
                var res = connection.Query(query);
            }

            return 1;
        }

        public static int SetCardFee(int locid, int odd)
        {
            string query = $@"
                           UPDATE [dbo].[DC_CardFeeSettings] SET Ecommerce = {odd}   WHERE LocID = {locid}  ;
                            ";

            using (var connection = new SqlConnection(connString))
            {
                var res = connection.Query(query);
            }

            return 1;
        }


        public static int SetTaxMethod(int locid, int oddeven)
        {
            string query = $@"
                          UPDATE [dbo].[DC_Location_Info] SET TaxMethod = {oddeven} WHERE [Location Code] = {locid};
                            ";

            using (var connection = new SqlConnection(connString))
            {
                var res = connection.Query(query);
            }

            return 1;
        }

    }

}


