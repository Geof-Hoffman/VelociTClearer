$(function () {
    var dataStart = [
      {
        state: 'Attorney',
        issues: [
          {
            issue: `URT`,
            min: 5,
            max: 15,
            lo: `an unreleased mortgage was found and will need to be released by the prior lender before proceeding. `,
            mo: `an unreleased mortgage was found and will need to be released by the prior lender before proceeding. Please search your records for an unrecorded release, "paid in full" letter, or other document showing that the attached mortgage was paid in full. `,
            tpo: `The attached mortgage to your company was returned with the title search. Our records indicate that it was previously paid in full but we were unable to locate a release in land records. \n\nAttached is a copy of your unrleased mortgage, our commitment and the borrower's authorization. Please prepare a release, email a copy to me, then send it to the county to be recorded as soon as you are able.\n\n`,
            etic: `-A release has been received/ #recorded for the unreleased mortgage showing on title. /#Please record release at closing.`,
            ltic: `-A release has been receive for the unreleased mortgage showing on title. This requirment will not appear on the final policy.`,
            com: `-Check SOL sheet for statutory experiation\n`
          },
          {
            issue: `JUDGMENT`,
            min: 5,
            max: 10,
            lo: `A judgment was returned with the title search and will need to be paid and/or released prior prior to or at closing.`,
            mo: `the attached judgment was returned with the title search and will need to be paid and/or released prior prior to or at closing. IF this was previously resolved please forward proof of payment. If you hav an unrecorded satisfaction, we may be able to record it with this transaction. Please forward any pertinent documents or information concerning the judgment to me so that I can contact the judgment holder to resolve the judgment and rleease the lien.`,
            tpo: `Navy Federal Title Services is working on a refinance of the above property. The attached judgment lien was returned with the title searchand will need to be resolved. \n\n Attached is a copy of your judgment, our commitment and the borrower's authorization. Please provide a payoff or, if the judgment was prevously paid, prepare a release, email a copy to me, then send it to the county to be recorded as soon as you are able. \nPlease let me know if you have any questions or if I can be of any assitance. \n Thank you in advance for your help resolving this issue.\nSincerely,\n\n`,
            etic: `-A release has been received/ #recorded for the judgment showing on title. /#Please record release at closing. OR Attorney to collect for judgment payoff at closing.\n\n`,
            ltic: `A payoff has been recieved for the jdugment showing on title, to be paid and released in closing. OR A release was received for the judgment lien showing on title.`,
            com: `Judgment expriation comments here`
          }, {
            issue: `TAX LIEN`,
            min: 1,
            max: 1,
            lo: `Attorney-Tax lien-tax lien`,
            mo: `Attorney-Tax lien-tax lien`,
            tpo: `Attorney-Tax lien-tax lien`,
            etic: `Attorney-Tax lien-tax lien`,
            ltic: `Attorney-Tax lien-tax lien`,
            com: `Attorney-Tax lien-tax lien`
          }
        ]
      }, {
        state: 'Escrow',
        issues: [
          {
            issue: `URT`,
            min: 5,
            max: 15,
            lo: `an unreleased mortgage was found and will need to be released by the prior lender before proceeding. `,
            mo: `an unreleased mortgage was found and will need to be released by the prior lender before proceeding. Please search your records for an unrecorded release, "paid in full" letter, or other document showing that the attached mortgage was paid in full. `,
            tpo: `The attached mortgage to your company was returned with the title search. Our records indicate that it was previously paid in full but we were unable to locate a release in land records. \n\nAttached is a copy of your unrleased mortgage, our commitment and the borrower's authorization. Please prepare a release, email a copy to me, then send it to the county to be recorded as soon as you are able.\n\n`,
            etic: `-A release has been received/ #recorded for the unreleased mortgage showing on title. /#Please record release at closing.`,
            ltic: `-A release has been receive for the unreleased mortgage showing on title. This requirment will not appear on the final policy.`,
            com: `-Check SOL sheet for statutory experiation\n`
          },
          {
            issue: `JUDGMENT`,
            min: 5,
            max: 10,
            lo: `A judgment was returned with the title search and will need to be paid and/or released prior prior to or at closing.`,
            mo: `the attached judgment was returned with the title search and will need to be paid and/or released prior prior to or at closing. IF this was previously resolved please forward proof of payment. If you hav an unrecorded satisfaction, we may be able to record it with this transaction. Please forward any pertinent documents or information concerning the judgment to me so that I can contact the judgment holder to resolve the judgment and rleease the lien.`,
            tpo: `Navy Federal Title Services is working on a refinance of the above property. The attached judgment lien was returned with the title searchand will need to be resolved. \n\n Attached is a copy of your judgment, our commitment and the borrower's authorization. Please provide a payoff or, if the judgment was prevously paid, prepare a release, email a copy to me, then send it to the county to be recorded as soon as you are able. \nPlease let me know if you have any questions or if I can be of any assitance. \n Thank you in advance for your help resolving this issue.\nSincerely,\n\n`,
            etic: `-A release has been received/ #recorded for the judgment showing on title. /#Please record release at closing. OR Attorney to collect for judgment payoff at closing.\n\n`,
            ltic: `A payoff has been recieved for the jdugment showing on title, to be paid and released in closing. OR A release was received for the judgment lien showing on title.`,
            com: `Judgment expriation comments here`
          }, {
            issue: `TAX LIEN`,
            min: 1,
            max: 1,
            lo: `Attorney-Tax lien-tax lien`,
            mo: `Attorney-Tax lien-tax lien`,
            tpo: `Attorney-Tax lien-tax lien`,
            etic: `Attorney-Tax lien-tax lien`,
            ltic: `Attorney-Tax lien-tax lien`,
            com: `Attorney-Tax lien-tax lien`
          }
        ]
      }, {
        state: 'Florida',
        issues: [
          {
            issue: `CMA`,
            min: 1,
            max: 1,
            lo: ``,
            mo: ``,
            tpo: ``,
            etic: ``,
            ltic: ``,
            com: ``
          },
          {
            issue: `Survey`,
            min: 1,
            max: 1,
            lo: ``,
            mo: ``,
            tpo: ``,
            etic: ``,
            ltic: ``,
            com: ``
          }, {
            issue: `NOC`,
            min: 1,
            max: 1,
            lo: ``,
            mo: ``,
            tpo: ``,
            etic: ``,
            ltic: ``,
            com: ``
          }
        ]
      }, {
        state: 'Virginia',
        issues: [
          {
            issue: `POA`,
            min: 1,
            max: 1,
            lo: ``,
            mo: ``,
            tpo: ``,
            etic: ``,
            ltic: ``,
            com: ``
          },
          {
            issue: `HOA`,
            min: 1,
            max: 1,
            lo: ``,
            mo: ``,
            tpo: ``,
            etic: ``,
            ltic: ``,
            com: ``
          }, {
            issue: `UCC`,
            min: 1,
            max: 1,
            lo: ``,
            mo: ``,
            tpo: ``,
            etic: ``,
            ltic: ``,
            com: ``
          }
        ]
      }];
    }];